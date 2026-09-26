import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
const inter = Inter({ subsets: ['latin'] })
import Header from "./components/header";
import { SanityLive } from "@/sanity/lib/live";
import { Analytics } from "@vercel/analytics/next";



export const metadata: Metadata = {
  metadataBase: new URL('https://www.jordanfurr.com'),
  title: {
    default: 'Jordan Ellis Furr',
    template: '%s — Jordan Ellis Furr',
  },
  description: 'Custom websites, quilting and art, brand design, creative projects, penpal. Tucson, Brooklyn, Paris.',
  openGraph: { type: 'website', siteName: 'Jordan Ellis Furr' },
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
        <Analytics />
      </body>
    </html>
  );
}
