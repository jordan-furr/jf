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
                <Link href="/design" className="menuItem" onClick={onClose}>Design</Link>
                <Link href="/writing" className="menuItem" onClick={onClose}>Writing</Link>
                <Link href="/dashboard" className="menuItem" onClick={onClose}>Database</Link>
                <Link href="/projects" className="menuItem" onClick={onClose}>Projects</Link>
                <Link href="/about" className="menuItem" onClick={onClose}>About</Link>
            </nav>
        </div>
    );
}