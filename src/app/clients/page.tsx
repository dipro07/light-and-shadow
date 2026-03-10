"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";
import Link from "next/link";

const ClientsPage = () => {
    return (
        <main>
            <PageHero
                title="Our Clients"
                subtitle="Trusted by industry leaders, celebrated by homeowners."
                image="/img/img1.jpg"
                label="Our Valued Partners"
            />

            <section className="clients-logos">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Who We've Worked With</span>
                        <h2 className="section-title fade-in">Trusted by <span>Leading Brands</span></h2>
                        <div className="underline-accent center"></div>
                        <p style={{ color: "var(--gray)", maxWidth: "540px", margin: "0 auto" }} className="fade-in delay-1">
                            From blue-chip corporations to celebrated private residences, our client list spans the breadth of Bangladesh's most distinguished organisations.
                        </p>
                    </div>
                    <div className="logos-grid fade-in delay-1">
                        {siteData.clients.map((client, i) => (
                            <div key={i} className="logo-box">{client}</div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="clients-testimonials">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Client Voices</span>
                        <h2 className="section-title fade-in">What Our Clients <span>Say About Us</span></h2>
                        <div className="underline-accent center"></div>
                    </div>
                    <div className="t-cards-grid">
                        {[
                            {
                                name: "Farhan Chowdhury",
                                role: "MD, TechBridge Bangladesh",
                                quote: "The transformation of our corporate headquarters exceeded every expectation we had. Light & Shadow's team approached our brief with extraordinary intelligence and aesthetic sensitivity. The space now perfectly embodies our company values."
                            },
                            {
                                name: "Sadia Akter",
                                role: "Head of Retail, Navana Group",
                                quote: "We commissioned three showrooms across Dhaka, and every single one has become a landmark in its neighbourhood. Light & Shadow understood our brand instinctively and delivered designs that consistently wow our customers and drive footfall."
                            },
                            {
                                name: "Rezaul Karim",
                                role: "Private Residential Client, Dhanmondi",
                                quote: "As a private residential client, I was new to the design process. The Light & Shadow team held my hand through every stage, educating, collaborating, and ultimately producing a home that feels like it was made for my soul. I can't imagine it any other way."
                            }
                        ].map((t, i) => (
                            <div key={i} className={`t-card fade-in delay-${i + 1}`}>
                                <div className="quote">"</div>
                                <p>{t.quote}</p>
                                <div className="t-author">
                                    <img src="/img/img1.jpg" alt={t.name} />
                                    <div>
                                        <div className="name">{t.name}</div>
                                        <div className="role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="section-label fade-in">Join Our Client Family</span>
                    <h2 className="fade-in delay-1">Ready to Become Our Next <span style={{ color: "var(--orange)" }}>Success Story?</span></h2>
                    <p className="fade-in delay-2">Let's collaborate to create a space you'll be proud of for years to come.</p>
                    <Link href="/contact" className="btn btn-primary fade-in delay-3">
                        Get in Touch &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default ClientsPage;
