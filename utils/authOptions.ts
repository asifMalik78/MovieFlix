import User from "@/models/user.model";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDb } from "@/utils/database";
import GoogleProvider from "next-auth/providers/google";
import { generateRandomPassword } from "@/utils/helperFunctions";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter your email",
        },

        password: {
          label: "Password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credential) {
        await connectDb();
        const email = credential?.email;
        const password = credential?.password;
        const user = await User.findOne({ email });
        if (!user) {
          return null;
        }

        const isPasswordMatch =
          password && (await bcrypt.compare(password, user.password));
        if (!isPasswordMatch) {
          return null;
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session }) {
      const user = await User.findOne({ email: session?.user?.email });
      session.user.name = user.username;
      session.user.email = user.email;
      session.user.image = user.profilePhoto;
      session.user.id = user._id.toString();
      return session;
    },

    async signIn(data) {
      try {
        await connectDb();
        const userExists = await User.findOne({ email: data.user.email });
        if (!userExists) {
          const hashedPassword = await bcrypt.hash(
            generateRandomPassword(),
            10
          );
          await User.create({
            email: data.user.email,
            username: data.user.name,
            profilePhoto: data.user.image,
            password: hashedPassword,
          });
        }
        return true;
      } catch (err: any) {
        console.log(err.message);
        return false;
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
