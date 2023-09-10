import Nav from "@/components/shared/Nav";
import "../globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/shared/Footer";
import BottomNav from "@/components/shared/BottomNav";
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";

const robot = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Movieflix",
  description: "A Movie Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robot.className}>
        <Provider>
          <Nav />
          {children}
          <BottomNav />
          <Footer />
        </Provider>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              style: {
                background: "black",
                color: "#ffffff",
                border: "2px solid green",
              },
            },
            error: {
              style: {
                background: "black",
                color: "#ffffff",
                border: "2px solid red",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
