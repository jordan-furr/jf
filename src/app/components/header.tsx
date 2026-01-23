'use client';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import Image from "next/image";
import MenuOverlay from './menu-overlay';
import { useState, useRef, useEffect } from 'react';


export default function Header() {
  const pathname = usePathname();
  const isActive = "/contact" === pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 150);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuOpen &&
        !isClosing &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, isClosing]);

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <header className='header'>
        <Link href="/"><p>Jordan Ellis Furr</p></Link>
        <div className="contactBtn">
          <Link
            href="/contact"
            className={`${isActive ? "activeLink" : ""}`}
            style={isActive ? { color: "#B510FF" } : undefined}
          ><p>Contact</p></Link>
        </div>
        <div
          className="menuToggleIcon"
          onClick={toggleMenu}
          ref={menuToggleRef}
        >
          <Image
            src={"/spiral.png"}
            alt="Jordan Ellis Furr spiral"
            width={50}
            height={50}
            layout="responsive"
            className="spiralIcon"
          />
        </div>

        {menuOpen && (
          <div ref={menuRef}>
            <MenuOverlay onClose={closeMenu} isClosing={isClosing} />
          </div>
        )}

      </header>
    </>
  );
}