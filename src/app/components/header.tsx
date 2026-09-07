'use client';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import Image from "next/image";
import MenuOverlay from './menu-overlay';
import { useState, useRef, useEffect } from 'react';

// Must match the .menuOverlay transform transition in globals.css, or the
// overlay unmounts part-way through its slide-out.
const CLOSE_DURATION = 330;

export default function Header() {
  const pathname = usePathname();
  const isActive = "/contact" === pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = () => {
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, CLOSE_DURATION);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Keep the page behind the overlay still, so closing the menu returns you
  // to where you were rather than wherever the body scrolled to underneath.
  // The lock goes on <html>: globals.css sets overflow-x on it, which makes it
  // the scroll container, so locking <body> alone has no effect.
  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, [menuOpen]);

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
        <Link href="/"><p className="jef-title">Jordan Ellis Furr</p></Link>
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
            style={{ width: '100%', height: 'auto' }}
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
