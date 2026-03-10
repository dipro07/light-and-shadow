"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";
import StatsBar from "@/components/home/StatsBar";
import Link from "next/link";

const WhyUsPage = () => {
    const features = [
        {
            num: "01",
            label: "Track Record",
            title: "A Decade of Proven Experience",
            desc: "With over 10 years and 150+ completed projects under our belt, Light & Shadow brings battle-tested expertise to every new commission. We have worked across residential, commercial, hospitality, and civic typologies — accumulating the nuanced understanding that only comes from real-world practice.",
            list: ["150+ projects across Bangladesh", "Multi-disciplinary team of 20+ specialists", "BIM-enabled digital workflow", "International design conference speakers"],
            img: "/img/img3.jpg",
            reverse: false
        },
        {
            num: "02",
            label: "Craftsmanship",
            title: "Uncompromising Design Quality",
            desc: "We refuse to cut corners — on design thinking, material specification, or construction detailing. Our quality control process is rigorous, involving multiple review stages from concept to handover. Every project that leaves our studio reflects the same standard we would demand for our own homes.",
            list: ["Multi-stage design review process", "Premium material sourcing partnerships", "15+ national and regional design awards", "ISO-aligned project documentation"],
            img: "/img/img4.jpg",
            reverse: true
        },
        {
            num: "03",
            label: "Reliability",
            title: "On-Time, Every Time",
            desc: "Time is money — and missed deadlines cost more than delays. Our structured project management approach, supported by dedicated PMs and real-time tracking, ensures that your project progresses on schedule. We deliver 95% of our projects on or ahead of the agreed timeline.",
            list: ["Dedicated project manager per commission", "Weekly progress reporting to clients", "Milestone-based payment structure", "Transparent contractor management"],
            img: "/img/img5.jpg",
            reverse: false
        },
        {
            num: "04",
            label: "Partnership",
            title: "You Are At the Centre of Everything",
            desc: "We don't impose a house style — we listen. Your lifestyle, aspirations, cultural context, and budget all inform every design decision we make. We check in regularly, respond promptly, and adapt swiftly. Our 200+ repeat and referred clients are testament to the relationships we build.",
            list: ["Personalised design strategy sessions", "24h response guarantee during projects", "Post-handover support & follow-up", "90%+ client satisfaction rate (surveyed)"],
            img: "/img/img2.jpg",
            reverse: true
        }
    ];

    return (
        <main>
            <PageHero
                title="Why Choose Us"
                subtitle="What sets us apart in a crowded field — and why it matters to you."
                image="/img/img1.jpg"
                label="The Light & Shadow Difference"
            />

            <section>
                <div className="container" style={{ textAlign: "center", paddingTop: "7rem" }}>
                    <span className="section-label">Our Differentiators</span>
                    <h2 className="section-title">Crafted with <span>Excellence</span>, Delivered with <span>Integrity</span></h2>
                    <div className="underline-accent center"></div>
                    <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--gray)" }}>
                        Choosing the right design partner is one of the most consequential decisions in any project. Here's why discerning clients consistently choose Light & Shadow.
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
                    <span className="section-label fade-in">Your Project Deserves the Best</span>
                    <h2 className="section-title fade-in delay-1">Let's Build Something <span>Remarkable</span></h2>
                    <p className="fade-in delay-2" style={{ maxWidth: "600px", margin: "1.5rem auto 2.5rem", color: "var(--gray-light)" }}>
                        Contact our team today to begin a partnership built on trust, creativity, and excellence.
                    </p>
                    <Link href="/contact" className="btn btn-primary fade-in delay-3">
                        Get in Touch &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default WhyUsPage;
