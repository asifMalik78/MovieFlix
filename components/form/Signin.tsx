"use client";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/validations/formSchema";
import { useForm } from "react-hook-form";
import {  useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

function Signin() {
  const {data : session} = useSession();
  console.log(session);
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  
  async function onSubmit(values: z.infer<typeof loginSchema>) {

    const res = await signIn("credentials" , {email : values.email , password : values.password , redirect : false});
    if(res?.error){
      toast.error("Incorrect Email or Password");
      return;
    }
    toast.success("Logged in Successfully");
    router.push("/");
  }

  async function googleHandler(){
    signIn('google');
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email"
                    className="form-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
                    className="form-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>
      
      <Button className="w-full mt-5 border border-primary" variant="outline" onClick={googleHandler}>Sign in with Google</Button>
    </>
  );
}

export default Signin;
