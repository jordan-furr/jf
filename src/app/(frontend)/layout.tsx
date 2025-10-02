'use client';
import "../globals.css";
import { Header } from "../components/header";
import { usePathname } from "next/navigation";
import SideBar from "../components/sidebar";


const images: Record<string, string> = {
  "/about": "/pink-jordanfurr.png",
  "/database": "/yellow-jordanfurr.png",
  "/design": "/red-jordanfurr.png",
  "/projects": "/green-jordanfurr.png",
  "/timeline": "/blue-jordanfurr.png",
  "/writing": "/navy-jordanfurr.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const imageSrc = images[pathname] || "/pink-jordanfurr.png";

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
