import "../globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Provider from "@/components/Provider";
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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
