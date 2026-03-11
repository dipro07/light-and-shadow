"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import StatsBar from "@/components/home/StatsBar";

const AboutPage = () => {
    return (
        <main>
            <PageHero
                title={siteData.aboutPage.hero.title}
                subtitle={siteData.aboutPage.hero.subtitle}
                image={siteData.aboutPage.hero.image}
                label={siteData.aboutPage.hero.label}
            />

            <section className="about-story">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text fade-in-left">
                            <span className="section-label">{siteData.aboutPage.story.tagline}</span>
                            <h2 className="section-title">{siteData.aboutPage.story.titleMain} <span>{siteData.aboutPage.story.titleAccent}</span></h2>
                            <div className="underline-accent"></div>
                            {siteData.aboutPage.story.paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            <Link href={siteData.aboutPage.story.buttonLink} className="btn btn-primary" style={{ marginTop: "1.5rem" }}>{siteData.aboutPage.story.buttonText}</Link>
                        </div>
                        <div className="about-image-wrap fade-in-right" style={{ height: "480px" }}>
                            <img src={siteData.aboutPage.story.image} alt="Studio workspace" />
                            <div className="about-badge">
                                <div className="num">{siteData.aboutPage.story.badgeNum}</div>
                                <div className="label">{siteData.aboutPage.story.badgeLabel}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">{siteData.aboutPage.team.tagline}</span>
                        <h2 className="section-title fade-in">{siteData.aboutPage.team.titleMain} <span>{siteData.aboutPage.team.titleAccent}</span></h2>
                        <div className="underline-accent center"></div>
                        <p style={{ color: "var(--gray)", maxWidth: "480px", margin: "0 auto" }} className="fade-in delay-1">
                            {siteData.aboutPage.team.description}
                        </p>
                    </div>
                    <div className="team-grid">
                        {siteData.aboutPage.team.members.map((m, i) => (
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
                        <span className="section-label">{siteData.aboutPage.missionVision.tagline}</span>
                        <h2 className="section-title fade-in">{siteData.aboutPage.missionVision.titleMain} <span>{siteData.aboutPage.missionVision.titleAccent}</span></h2>
                        <div className="underline-accent center"></div>
                    </div>
                    <div className="mv-grid">
                        {siteData.aboutPage.missionVision.items.map((item, i) => (
                            <div key={i} className={`mv-card ${i % 2 === 0 ? "fade-in-left" : "fade-in-right"} ${i >= 2 ? "delay-2" : ""}`}>
                                <div className="mv-icon"><i className={`fa-solid fa-${item.icon}`}></i></div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="section-label fade-in">{siteData.aboutPage.ctaBanner.tagline}</span>
                    <h2 className="fade-in delay-1">{siteData.aboutPage.ctaBanner.titleMain} <span style={{ color: "var(--orange)" }}>{siteData.aboutPage.ctaBanner.titleAccent}</span></h2>
                    <p className="fade-in delay-2" style={{ maxWidth: "600px", margin: "1.5rem auto 2.5rem", color: "var(--gray-light)" }}>
                        {siteData.aboutPage.ctaBanner.description}
                    </p>
                    <Link href={siteData.aboutPage.ctaBanner.buttonLink} className="btn btn-primary fade-in delay-3">
                        {siteData.aboutPage.ctaBanner.buttonText} &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
