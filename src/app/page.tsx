"use client";

import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsBar from "@/components/home/StatsBar";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Home() {
    return (
        <>
            <Hero />

            {/* About Snippet */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image-wrap fade-in-left">
                            <img src={siteData.homePage.aboutSnippet.image} alt="Studio portfolio" />
                            <div className="about-badge">
                                <div className="num">{siteData.homePage.aboutSnippet.badgeNum}</div>
                                <div className="label">{siteData.homePage.aboutSnippet.badgeLabel}</div>
                            </div>
                        </div>
                        <div className="about-text fade-in-right">
                            <span className="section-label">{siteData.homePage.aboutSnippet.tagline}</span>
                            <h2 className="section-title">{siteData.homePage.aboutSnippet.titleMain} <span>{siteData.homePage.aboutSnippet.titleAccent}</span></h2>
                            <div className="underline-accent"></div>
                            {siteData.homePage.aboutSnippet.paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            <div className="about-features">
                                {siteData.homePage.aboutSnippet.features.map((feat, i) => (
                                    <div key={i} className="about-feat-item"><i className="fa-solid fa-check-circle"></i> {feat}</div>
                                ))}
                            </div>
                            <Link href={siteData.homePage.aboutSnippet.buttonLink} className="btn btn-primary" style={{ marginTop: "2rem" }}>
                                {siteData.homePage.aboutSnippet.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesPreview />
            <StatsBar />
            <FeaturedProjects />
            <Testimonials />

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="section-label fade-in">{siteData.homePage.ctaBanner.tagline}</span>
                    <h2 className="fade-in delay-1">{siteData.homePage.ctaBanner.titleMain} <span style={{ color: "var(--orange)" }}>{siteData.homePage.ctaBanner.titleAccent}</span></h2>
                    <p className="fade-in delay-2" style={{ maxWidth: "600px", margin: "1.5rem auto 2.5rem", color: "var(--gray-light)" }}>
                        {siteData.homePage.ctaBanner.description}
                    </p>
                    <Link href={siteData.homePage.ctaBanner.buttonLink} className="btn btn-primary fade-in delay-3">
                        {siteData.homePage.ctaBanner.buttonText} &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </>
    );
}
