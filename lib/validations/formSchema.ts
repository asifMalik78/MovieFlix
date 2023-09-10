import * as z from "zod";

export const loginSchema = z
  .object({
    email: z.string().email().nonempty({ message: "Email required" }),
    password: z.string().nonempty(),
  })
  

export const registerSchema = z
  .object({
    username: z.string().min(3).nonempty({ message: "Username required" }),
    email: z.string().email().nonempty({ message: "Email required" }),
    password: z.string().min(4),
    confirmPassword: z.string().min(4)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"]
  });
