'use client';
import "../globals.css";
import { Header } from "../components/header";
import { usePathname } from "next/navigation";
import SideBar from "../components/sidebar";

const images: Record<string, string> = {
  "/about": "/yellow.jpg",
  "/dashboard": "/lime.jpg",
  "/design": "/sky.jpg",
  "/projects": "/red.jpg",
  "/writing": "/blue.jpg",
  "/posts": "/blue.jpg",
  "/contact": "/green.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const imageSrc = images[pathname] || "/blue.jpg";

  return (
    <html lang="en">
      <body>
        <Header />
        <SideBar imageSrc={imageSrc} />
        {children}
      </body>
    </html>
  );
}
