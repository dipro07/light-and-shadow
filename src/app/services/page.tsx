"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <main>
            <PageHero
                title={siteData.servicesPage.hero.title}
                subtitle={siteData.servicesPage.hero.subtitle}
                image={siteData.servicesPage.hero.image}
                label={siteData.servicesPage.hero.label}
            />

            <section className="services-full">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">{siteData.servicesPage.expertise.tagline}</span>
                        <h2 className="section-title fade-in">{siteData.servicesPage.expertise.titleMain} <span>{siteData.servicesPage.expertise.titleAccent}</span></h2>
                        <div className="underline-accent center"></div>
                        <p style={{ color: "var(--gray)", maxWidth: "560px", margin: "0 auto" }} className="fade-in delay-1">
                            {siteData.servicesPage.expertise.description}
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
                        <span className="section-label">{siteData.servicesPage.process.tagline}</span>
                        <h2 className="section-title fade-in">{siteData.servicesPage.process.titleMain} <span>{siteData.servicesPage.process.titleAccent}</span></h2>
                        <div className="underline-accent center"></div>
                    </div>

                    <div className="process-grid fade-in">
                        {siteData.servicesPage.process.steps.map((p, i) => (
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
                    <span className="section-label fade-in">{siteData.servicesPage.ctaBanner.tagline}</span>
                    <h2 className="fade-in delay-1">{siteData.servicesPage.ctaBanner.titleMain} <span style={{ color: "var(--orange)" }}>{siteData.servicesPage.ctaBanner.titleAccent}</span></h2>
                    <p className="fade-in delay-2">{siteData.servicesPage.ctaBanner.description}</p>
                    <Link href={siteData.servicesPage.ctaBanner.buttonLink} className="btn btn-primary fade-in delay-3">
                        {siteData.servicesPage.ctaBanner.buttonText} &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default ServicesPage;
