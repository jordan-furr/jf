'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation";

interface SideBarProps {
    imageSrc: string;
}

export default function SideBar({ imageSrc }: SideBarProps) {

    const navItems = [
        { href: "/design", label: "Design", color: "#35C6FF" },
        { href: "/writing", label: "Writing", color: "#0061D6" },
        { href: "/dashboard", label: "Database", color: "#55C500" },
        { href: "/projects", label: "Projects", color: "#2418FF" },
        { href: "/about", label: "About", color: "#f8671d" },
    ];

    const pathname = usePathname();

    return (
        <div className='sidebar'>
            <div className='deskStar'>
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
            </div>
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