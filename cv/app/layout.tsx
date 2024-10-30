import type { Metadata } from "next";
import {Reenie_Beanie, Yuji_Boku} from 'next/font/google'
import "./css/globals.css";

const reenie = Reenie_Beanie({
  subsets: ['latin'],
  weight: ['400']
})
const yuji = Yuji_Boku({
  subsets: ['latin'],
  weight: ['400']
})


export const metadata: Metadata = {
  title: "Lance Cross",
  description: "Lance Cross's CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
