"use client";
import Signin from "@/components/form/Signin";
import Signup from "@/components/form/Signup";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import Img from "@/components/shared/LazyLoadImg";
import React  from "react";
import { Toaster } from "react-hot-toast";


function page() {
  return (
    <div className="relative w-screen h-screen overflow-y-hidden">
      <div className="login-bg">
        <Img
          src="/assets/login_bg.jpg"
          alt="bg-image"
          className="hidden object-contain w-screen h-full md:block"
        />
        <div className="bottom-gradient"></div>
      </div>
      <section className="px-6 py-8 rounded-lg absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:w-[25rem] w-[90%] nav-bg-glass">
        <h1 className="block mb-5 text-2xl font-bold text-center text-white md:hidden">
          MOVIE <span className="text-2xl font-bold text-primary">FLIX</span>
        </h1>
        <Tabs defaultValue="Sign in" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="Sign in"
              className="data-[state=active]:bg-primary"
            >
              Sign in
            </TabsTrigger>
            <TabsTrigger
              value="Sign up"
              className="data-[state=active]:bg-primary"
            >
              Sign up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Sign in">
            <Signin />
          </TabsContent>
          <TabsContent value="Sign up">
            <Signup />
          </TabsContent>
        </Tabs>
      </section>
      <Toaster
      position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "black",
              color:"#ffffff",
              border:"2px solid green"
            },
          },
          error: {
            style: {
              background: "black",
              color:"#ffffff",
              border:"2px solid red"
            },
          },
        }}
      />
    </div>
  );
}

export default page;
