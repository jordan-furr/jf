'use client';
import { usePathname } from "next/navigation";
import Link from 'next/link'

export function Header() {

  const pathname = usePathname();
  const isActive = "/about" === pathname;

  return (
    <div>
      <header className='header'>
        <Link href="/"><p>Jordan Furr</p></Link>
        <Link
          href="/about"
          className={`${isActive ? "activeLink" : ""}`}
          style={isActive ? { color: "#ff1795" } : undefined}
        >
          <p>about</p></Link>
      </header>
    </div>
  )
}