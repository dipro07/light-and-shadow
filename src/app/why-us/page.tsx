"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";
import StatsBar from "@/components/home/StatsBar";
import Link from "next/link";

const WhyUsPage = () => {
    const features = siteData.whyUsPage.features;

    return (
        <main>
            <PageHero
                title={siteData.whyUsPage.hero.title}
                subtitle={siteData.whyUsPage.hero.subtitle}
                image={siteData.whyUsPage.hero.image}
                label={siteData.whyUsPage.hero.label}
            />

            <section style={{ padding: "7rem" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="section-label">{siteData.whyUsPage.differentiators.tagline}</span>
                    <h2 className="section-title">{siteData.whyUsPage.differentiators.titleMain} <span>{siteData.whyUsPage.differentiators.titleAccent}</span></h2>
                    <div className="underline-accent center"></div>
                    <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--gray)" }}>
                        {siteData.whyUsPage.differentiators.description}
                    </p>
                </div>
            </section>

            <section className="why-features">
                <div className="container">
                    {features.map((f, i) => (
                        <div key={i} className={`feature-block ${f.reverse ? "reverse" : ""} fade-in`}>
                            <div className={`feature-image ${f.reverse ? "fade-in-left" : "fade-in-right"}`}>
                                <img src={f.img} alt={f.title} />
                            </div>
                            <div className={`feature-text ${f.reverse ? "fade-in-right" : "fade-in-left"}`}>
                                <div className="feature-num">{f.num}</div>
                                <span className="section-label">{f.label}</span>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                                <ul className="feature-list">
                                    {f.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <StatsBar />

            <section className="cta-banner">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="section-label fade-in">{siteData.whyUsPage.ctaBanner.tagline}</span>
                    <h2 className="section-title fade-in delay-1">{siteData.whyUsPage.ctaBanner.titleMain} <span>{siteData.whyUsPage.ctaBanner.titleAccent}</span></h2>
                    <p className="fade-in delay-2" style={{ maxWidth: "600px", margin: "1.5rem auto 2.5rem", color: "var(--gray-light)" }}>
                        {siteData.whyUsPage.ctaBanner.description}
                    </p>
                    <Link href={siteData.whyUsPage.ctaBanner.buttonLink} className="btn btn-primary fade-in delay-3">
                        {siteData.whyUsPage.ctaBanner.buttonText} &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default WhyUsPage;
