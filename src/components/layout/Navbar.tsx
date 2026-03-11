"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/siteData";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled || pathname !== "/" ? "scrolled" : ""} ${isMenuOpen ? "scrolled" : ""}`}>
            <div className="nav-inner">
                <Link href="/" className="nav-logo">
                    <span className="studio-label">{siteData.company.tagline}</span>
                    <span className="logo-name">
                        {siteData.company.name.split(' & ')[0]} <span>&</span> {siteData.company.name.split(' & ')[1]}
                    </span>
                </Link>

                <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <div className="mobile-menu-header">
                        <div className="nav-logo">
                            <span className="studio-label">{siteData.company.tagline}</span>
                            <span className="logo-name">
                                {siteData.company.name.split(' & ')[0]} <span>&</span> {siteData.company.name.split(' & ')[1]}
                            </span>
                        </div>
                        <button
                            className="menu-close"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    {siteData.navigation.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={pathname === link.href ? "active" : ""}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <div className="mobile-menu-footer">
                        <Link
                            href="/contact"
                            className="btn btn-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Professional Quote
                        </Link>
                    </div>
                </ul>

                <div className="nav-right">
                    <Link href="/contact" className="btn btn-primary btn-sm">
                        Get Quote
                    </Link>
                    <button
                        className={`hamburger ${isMenuOpen ? "open" : ""}`}
                        aria-label="Toggle menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
