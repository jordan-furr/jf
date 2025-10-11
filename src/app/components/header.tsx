'use client';
import { usePathname } from "next/navigation";
import Link from 'next/link'

export function Header() {

  const pathname = usePathname();
  const isActive = "/contact" === pathname;

  return (
    <div>
      <header className='header'>
        <Link href="/"><p>Jordan Furr</p></Link>
        <Link
          href="/contact"
          className={`${isActive ? "activeLink" : ""}`}
          style={isActive ? { color: "#B510FF" } : undefined}
        >
          <p>Contact</p></Link>
      </header>
    </div>
  )
}