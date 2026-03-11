"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";

const ContactPage = () => {
    return (
        <main>
            <PageHero
                title={siteData.contactPage.hero.title}
                subtitle={siteData.contactPage.hero.subtitle}
                image={siteData.contactPage.hero.image}
                label={siteData.contactPage.hero.label}
            />

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Form */}
                        <div className="contact-form-wrap fade-in-left">
                            <span className="section-label">{siteData.contactPage.form.tagline}</span>
                            <h3>{siteData.contactPage.form.titleMain} <span style={{ color: "var(--orange)" }}>{siteData.contactPage.form.titleAccent}</span></h3>
                            <p>{siteData.contactPage.form.description}</p>

                            <form id="contact-form" noValidate>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name <span style={{ color: "var(--orange)" }}>*</span></label>
                                        <input type="text" id="name" name="name" placeholder="Your full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address <span style={{ color: "var(--orange)" }}>*</span></label>
                                        <input type="email" id="email" name="email" placeholder="your@email.com" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" placeholder="01XXX-XXXXXX" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="service">Service Required</label>
                                        <select id="service" name="service">
                                            <option value="">Select a service —</option>
                                            {siteData.contactPage.form.services.map((service, index) => (
                                                <option key={index}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message <span style={{ color: "var(--orange)" }}>*</span></label>
                                    <textarea id="message" name="message"
                                        placeholder="Describe your project, location, timeline, and any specific requirements —"
                                        required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                    {siteData.contactPage.form.buttonText} &nbsp;<i className="fa-solid fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-wrap fade-in-right">
                            {/* Google Maps Embed (free, no API key) */}
                            <div style={{ borderRadius: "12px", overflow: "hidden", height: "220px", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <iframe
                                    src={siteData.contactPage.info.googleMapsUrl}
                                    width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`${siteData.company.name} Location`}></iframe>
                            </div>

                            <div className="contact-info-cards">
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                                    <div>
                                        <h5>Studio Address</h5>
                                        <p>{siteData.company.contact.address.split(',')[0]}<br />{siteData.company.contact.address.split(',').slice(1).join(',')}</p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                                    <div>
                                        <h5>Call Us</h5>
                                        <p>
                                            {siteData.company.contact.phones.map((phone, i) => (
                                                <React.Fragment key={i}>
                                                    <a href={`tel:+88${phone.replace(/[^0-9]/g, '')}`}>{phone}</a><br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                                    <div>
                                        <h5>Email Us</h5>
                                        <p><a href={`mailto:${siteData.company.contact.email}`}>{siteData.company.contact.email}</a></p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-clock"></i></div>
                                    <div>
                                        <h5>Working Hours</h5>
                                        <p>{siteData.company.contact.workingHours.weekdays}<br />{siteData.company.contact.workingHours.friday}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div style={{ marginTop: "0.5rem" }}>
                                <h5 style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray)", marginBottom: "1rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>
                                    {siteData.contactPage.info.socialTitle}</h5>
                                <div className="social-links">
                                    <a href={siteData.company.socials.facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a href={siteData.company.socials.instagram} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                    <a href={siteData.company.socials.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    <a href={siteData.company.socials.youtube} aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "6rem 0", background: "var(--black)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <span className="section-label">{siteData.contactPage.faq.tagline}</span>
                        <h2 className="section-title fade-in">{siteData.contactPage.faq.titleMain} <span>{siteData.contactPage.faq.titleAccent}</span></h2>
                        <div className="underline-accent center"></div>
                    </div>
                    <div className="faq-grid fade-in delay-1">
                        {siteData.faqs.map((faq, i) => (
                            <div key={i} style={{ background: "var(--dark)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "1.75rem", borderLeft: "3px solid var(--orange)" }}>
                                <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.question}</h4>
                                <p style={{ color: "var(--gray)", fontSize: "0.88rem", lineHeight: "1.75" }}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ContactPage;
