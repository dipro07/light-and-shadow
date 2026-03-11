"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-logo">
                        <div className="studio-label">{siteData.company.tagline}</div>
                        <div className="logo-name">{siteData.company.name}</div>
                        <p>{siteData.company.description}</p>
                        <div className="social-links">
                            <a href={siteData.company.socials.facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href={siteData.company.socials.instagram} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href={siteData.company.socials.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href={siteData.company.socials.youtube} aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {siteData.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>
                                        <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.65rem" }}></i> {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {siteData.services.map((service) => (
                                <li key={service.id}>
                                    <Link href="/services">
                                        <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.65rem" }}></i> {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>{siteData.company.contact.address}</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                {siteData.company.contact.phones.map((phone) => (
                                    <div key={phone}>
                                        <a href={`tel:${phone.replace(/-/g, "")}`}>{phone}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <a href={`mailto:${siteData.company.contact.email}`}>{siteData.company.contact.email}</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} <span>{siteData.company.name}</span>. All Rights Reserved.</p>
                    <p>Designed with <span>Fuad Hasan</span> in Dhaka, Bangladesh</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
