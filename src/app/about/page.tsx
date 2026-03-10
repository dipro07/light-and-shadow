"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import StatsBar from "@/components/home/StatsBar";

const AboutPage = () => {
    return (
        <main>
            <PageHero
                title="About Our Studio"
                subtitle="A decade of translating vision into enduring space."
                image="/img/img1.jpg"
                label="Get to Know Us"
            />

            <section className="about-story">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text fade-in-left">
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title">Built on Passion, <span>Driven by Purpose</span></h2>
                            <div className="underline-accent"></div>
                            <p>Light & Shadow Arch. Studio was born from a singular conviction: that architecture should do more than shelter — it should elevate. Founded in Dhaka over a decade ago, we set out to challenge the conventional and champion the extraordinary in every project we undertake.</p>
                            <p>From our first residential commission to landmark commercial buildings, we have grown steadily while keeping our founding philosophy intact: rigorous design thinking, honest material use, and an unwavering commitment to the client's vision.</p>
                            <p>Today, our studio brings together architects, interior designers, 3D artists, and project managers in a collaborative environment that produces work of genuine distinction — responsive to Bangladesh's unique cultural and climatic context, yet firmly global in its ambition.</p>
                            <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>Work With Us</Link>
                        </div>
                        <div className="about-image-wrap fade-in-right" style={{ height: "480px" }}>
                            <img src="/img/img6.jpg" alt="Studio workspace" />
                            <div className="about-badge">
                                <div className="num">150+</div>
                                <div className="label">Projects Done</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">The People</span>
                        <h2 className="section-title fade-in">Meet Our <span>Expert Team</span></h2>
                        <div className="underline-accent center"></div>
                        <p style={{ color: "var(--gray)", maxWidth: "480px", margin: "0 auto" }} className="fade-in delay-1">
                            A diverse collective of creative minds united by one purpose — exceptional design.
                        </p>
                    </div>
                    <div className="team-grid">
                        {[
                            { name: "Arman Hossain", role: "Principal Architect", img: "/img/img1.jpg" },
                            { name: "Sabrina Rahman", role: "Lead Interior Designer", img: "/img/img1.jpg" },
                            { name: "Tanvir Ahmed", role: "Senior Project Manager", img: "/img/img1.jpg" }
                        ].map((m, i) => (
                            <div key={i} className={`team-card fade-in delay-${i + 1}`}>
                                <div className="team-photo">
                                    <img src={m.img} alt={m.name} />
                                </div>
                                <div className="team-info">
                                    <h3>{m.name}</h3>
                                    <span>{m.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <StatsBar />

            <section className="mission-vision">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">What We Stand For</span>
                        <h2 className="section-title fade-in">Our Mission <span>& Vision</span></h2>
                        <div className="underline-accent center"></div>
                    </div>
                    <div className="mv-grid">
                        <div className="mv-card fade-in-left">
                            <div className="mv-icon"><i className="fa-solid fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>To design environments that inspire the human spirit — spaces where light, material, and form are choreographed with intention. We deliver bespoke architectural and interior solutions that reflect our clients' unique identities while contributing positively to the urban fabric of Bangladesh.</p>
                        </div>
                        <div className="mv-card fade-in-right">
                            <div className="mv-icon"><i className="fa-solid fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>To be the most respected design studio in South Asia, recognised for producing work of timeless quality that bridges the gap between artistry and engineering — shaping cities and lives for generations to come.</p>
                        </div>
                        <div className="mv-card fade-in-left delay-2">
                            <div className="mv-icon"><i className="fa-solid fa-leaf"></i></div>
                            <h3>Sustainability</h3>
                            <p>Every project we design is underpinned by a commitment to environmental responsibility. We integrate passive design strategies, locally-sourced materials, and energy-efficient systems as standard practice.</p>
                        </div>
                        <div className="mv-card fade-in-right delay-2">
                            <div className="mv-icon"><i className="fa-solid fa-users"></i></div>
                            <h3>Client Partnership</h3>
                            <p>We treat every client as a collaborator. Through open communication, transparent processes, and genuine listening, we ensure the final design always exceeds expectation while remaining true to budget and timeline.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="section-label fade-in">Let's Create Together</span>
                    <h2 className="fade-in delay-1">Have a Project in Mind?</h2>
                    <p className="fade-in delay-2" style={{ maxWidth: "600px", margin: "1.5rem auto 2.5rem", color: "var(--gray-light)" }}>
                        Tell us about your vision and we'll craft a design strategy tailored just for you.
                    </p>
                    <Link href="/contact" className="btn btn-primary fade-in delay-3">
                        Start a Conversation &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
