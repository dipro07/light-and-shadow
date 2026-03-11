"use client";

import React, { useState } from "react";
import { siteData } from "@/data/siteData";

const Testimonials = () => {
    const [active, setActive] = useState(0);
    const testimonials = siteData.testimonials;

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-head">
                    <span className="section-label fade-in">{siteData.homePage.testimonials.tagline}</span>
                    <h2 className="section-title fade-in">{siteData.homePage.testimonials.titleMain} <span>{siteData.homePage.testimonials.titleAccent}</span></h2>
                    <div className="underline-accent center"></div>
                </div>

                <div className="testimonial-slider fade-in delay-1">
                    <div className="testimonial-track" style={{ transform: `translateX(-${active * 100}%)` }}>
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="quote-icon">"</div>
                                    <p>{t.quote}</p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            <img src={t.avatar} alt={t.author} />
                                        </div>
                                        <div className="author-info">
                                            <div className="author-name">{t.author}</div>
                                            <div className="author-role">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="testimonial-nav">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`t-dot ${i === active ? "active" : ""}`}
                            onClick={() => setActive(i)}
                        ></div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
