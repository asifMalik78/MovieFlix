import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user.model";
import { connectDb } from "@/utils/database";


export const POST = async (req: NextRequest) => {
  const { username, email, password } = await req.json();
  await connectDb();
  try {
    const isUserExists = await User.findOne({email});
    if(isUserExists){
      return NextResponse.json({message : "User Already Exists"} , {status : 401});
    }

    const hashedPassword = await bcrypt.hash(password , 10);
    const user = new User({
        username , email , password : hashedPassword , 
    });

    await user.save();
    return NextResponse.json({ message: "Registered  Successfully" }, { status: 200 });
  } catch (err: any) {
    console.log("Error is ", err.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
