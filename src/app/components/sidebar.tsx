'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation";

interface SideBarProps {
    imageSrc: string;
}

export default function SideBar({ imageSrc }: SideBarProps) {

    const navItems = [
        { href: "/writing", label: "thoughts", color: "#ff1795" },
        { href: "/design", label: "design", color: "#d70000" },
        { href: "/projects", label: "projects", color: "#255b35" },
        { href: "/timeline", label: "timeline", color: "#295f9c" },
        { href: "/database", label: "database", color: "#b1c52c" },
    ];

    const pathname = usePathname();

    return (
        <div className='sidebar'>
            <Link href={"/"}>
                <Image
                    src={imageSrc}
                    alt="Jordan Furr Star with JF Initials"
                    width={300}
                    height={300}
                    layout="responsive"
                    className='sideStar'
                    priority
                />
            </Link>
            <div className='sideMenu'>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${isActive ? "activeLink" : ""}`}
                            style={isActive ? { color: item.color } : undefined}
                        >
                            <p className="wordLink">{item.label}</p>
                        </Link>
                    );
                })}

            </div>
        </div>
    )
}