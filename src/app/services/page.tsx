"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <main>
            <PageHero
                title="Our Services"
                subtitle="Comprehensive design solutions from concept to completion."
                image="/img/img1.jpg"
                label="What We Offer"
            />

            <section className="services-full">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Expertise</span>
                        <h2 className="section-title fade-in">Design Services <span>Tailored for You</span></h2>
                        <div className="underline-accent center"></div>
                        <p style={{ color: "var(--gray)", maxWidth: "560px", margin: "0 auto" }} className="fade-in delay-1">
                            Every service we provide is underpinned by meticulous attention to detail, creative innovation, and a deep respect for our clients' goals and timelines.
                        </p>
                    </div>

                    <div className="services-grid">
                        {siteData.services.map((service, index) => (
                            <div key={service.id} className={`service-card fade-in delay-${(index % 3) + 1}`}>
                                <div className="service-icon"><i className={`fa-solid fa-${service.icon}`}></i></div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link href="/contact" className="service-link">
                                    Get a Quote <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section style={{ padding: "7rem 0", background: "var(--black)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">How We Work</span>
                        <h2 className="section-title fade-in">Our Design <span>Process</span></h2>
                        <div className="underline-accent center"></div>
                    </div>

                    <div className="process-grid fade-in">
                        {[
                            { step: "01", title: "Discovery", icon: "magnifying-glass", desc: "We listen deeply to understand your vision, lifestyle, budget, and the story you want your space to tell." },
                            { step: "02", title: "Concept Design", icon: "pencil-ruler", desc: "We prepare concept drawings, mood boards, and 3D explorations to establish the design direction collaboratively." },
                            { step: "03", title: "Development", icon: "drafting-compass", desc: "Detailed drawings, specifications, and material selections are finalised. Every decision is documented for precise execution." },
                            { step: "04", title: "Delivery", icon: "flag-checkered", desc: "We supervise construction, manage contractors, and oversee every detail until your space is handed over flawlessly." }
                        ].map((p, i) => (
                            <div key={i} style={{ textAlign: "center", padding: "2rem 1.5rem", background: "var(--dark)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
                                <div style={{ fontFamily: "var(--font-head)", fontSize: "3rem", fontWeight: "900", color: "rgba(255,140,0,0.12)", lineHeight: "1" }}>
                                    {p.step}
                                </div>
                                <div style={{ width: "48px", height: "48px", background: "var(--orange-soft)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--orange)", fontSize: "1.2rem", margin: "0.5rem auto 1rem" }}>
                                    <i className={`fa-solid fa-${p.icon}`}></i>
                                </div>
                                <h4 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>{p.title}</h4>
                                <p style={{ color: "var(--gray)", fontSize: "0.85rem", lineHeight: "1.7" }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container">
                    <span className="section-label fade-in">Start the Conversation</span>
                    <h2 className="fade-in delay-1">Ready to Begin Your <span style={{ color: "var(--orange)" }}>Design Journey?</span></h2>
                    <p className="fade-in delay-2">Reach out today to discuss your project and receive a customised proposal from our team.</p>
                    <Link href="/contact" className="btn btn-primary fade-in delay-3">
                        Request a Quote &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default ServicesPage;
