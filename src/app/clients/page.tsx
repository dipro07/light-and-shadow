"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";
import Link from "next/link";

const ClientsPage = () => {
    return (
        <main>
            <PageHero
                title={siteData.clientsPage.hero.title}
                subtitle={siteData.clientsPage.hero.subtitle}
                image={siteData.clientsPage.hero.image}
                label={siteData.clientsPage.hero.label}
            />

            <section className="clients-logos">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">{siteData.clientsPage.clientLogos.tagline}</span>
                        <h2 className="section-title fade-in">{siteData.clientsPage.clientLogos.titleMain} <span>{siteData.clientsPage.clientLogos.titleAccent}</span></h2>
                        <div className="underline-accent center"></div>
                        <p style={{ color: "var(--gray)", maxWidth: "540px", margin: "0 auto" }} className="fade-in delay-1">
                            {siteData.clientsPage.clientLogos.description}
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
                        <span className="section-label">{siteData.clientsPage.testimonials.tagline}</span>
                        <h2 className="section-title fade-in">{siteData.clientsPage.testimonials.titleMain} <span>{siteData.clientsPage.testimonials.titleAccent}</span></h2>
                        <div className="underline-accent center"></div>
                    </div>
                    <div className="t-cards-grid">
                        {siteData.clientsPage.testimonials.list.map((t, i) => (
                            <div key={i} className={`t-card fade-in delay-${i + 1}`}>
                                <div className="quote">"</div>
                                <p>{t.quote}</p>
                                <div className="t-author">
                                    <img src={t.avatar} alt={t.name} />
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
                    <span className="section-label fade-in">{siteData.clientsPage.ctaBanner.tagline}</span>
                    <h2 className="fade-in delay-1">{siteData.clientsPage.ctaBanner.titleMain} <span style={{ color: "var(--orange)" }}>{siteData.clientsPage.ctaBanner.titleAccent}</span></h2>
                    <p className="fade-in delay-2">{siteData.clientsPage.ctaBanner.description}</p>
                    <Link href={siteData.clientsPage.ctaBanner.buttonLink} className="btn btn-primary fade-in delay-3">
                        {siteData.clientsPage.ctaBanner.buttonText} &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default ClientsPage;
