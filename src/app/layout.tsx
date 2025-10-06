import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
const inter = Inter({ subsets: ['latin'] })
import { Header } from "./components/header";
import { SanityLive } from "@/sanity/lib/live";



export const metadata: Metadata = {
  title: "Jordan Furr",
  description: "Jordan Furr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
