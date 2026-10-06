import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MenuOverlayProps {
    onClose: () => void;
    isClosing?: boolean;
}

export default function MenuOverlay({ onClose, isClosing = false }: MenuOverlayProps) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isClosing) {
            setAnimate(false);
        } else {
            requestAnimationFrame(() => setAnimate(true));
        }
    }, [isClosing]);

    return (
        <div className={`menuOverlay ${animate && !isClosing ? 'menuOpen' : ''}`}>
            <nav className="menuCont">
                <Link href="/art" className="menuItem" onClick={onClose}>Quilts</Link>
                <Link href="/web" className="menuItem" onClick={onClose}>Website</Link>
                <Link href="/works" className="menuItem" onClick={onClose}>Projects</Link>
                <Link href="/about" className="menuItem" onClick={onClose}>About</Link>
                <Link href="/contact" className="menuItem" onClick={onClose}>Contact</Link>
            </nav>
        </div>
    );
}