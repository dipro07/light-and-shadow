"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";

const ContactPage = () => {
    return (
        <main>
            <PageHero
                title="Contact Us"
                subtitle="Let's start a conversation about your next great space."
                image="/img/img1.jpg"
                label="Reach Out to Us"
            />

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Form */}
                        <div className="contact-form-wrap fade-in-left">
                            <span className="section-label">Send a Message</span>
                            <h3>Tell Us About Your <span style={{ color: "var(--orange)" }}>Project</span></h3>
                            <p>Fill in the form below and our team will get back to you within 24 hours.</p>

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
                                            <option>Interior Design</option>
                                            <option>Architecture</option>
                                            <option>Renovation</option>
                                            <option>3D Visualization</option>
                                            <option>Consultation</option>
                                            <option>Project Management</option>
                                            <option>Other</option>
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
                                    Send Message &nbsp;<i className="fa-solid fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-wrap fade-in-right">
                            {/* Google Maps Embed (free, no API key) */}
                            <div style={{ borderRadius: "12px", overflow: "hidden", height: "220px", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <iframe
                                    src="https://maps.google.com/maps?q=Senpara+Parbata,+Mirpur-10,+Dhaka,+Bangladesh&output=embed&z=15"
                                    width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Light & Shadow Arch. Studio Location"></iframe>
                            </div>

                            <div className="contact-info-cards">
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                                    <div>
                                        <h5>Studio Address</h5>
                                        <p>Chowrangi Market, 95 Senpara Parbata<br />Mirpur-10, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                                    <div>
                                        <h5>Call Us</h5>
                                        <p>
                                            <a href="tel:+8801751086142">01751-086142</a><br />
                                            <a href="tel:+8801765992228">01765-992228</a><br />
                                            <a href="tel:+8801727153879">01727-153879</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                                    <div>
                                        <h5>Email Us</h5>
                                        <p><a href="mailto:lightshadow.architect@gmail.com">lightshadow.architect@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><i className="fa-solid fa-clock"></i></div>
                                    <div>
                                        <h5>Working Hours</h5>
                                        <p>Saturday – Thursday: 9 AM – 7 PM<br />Friday: By Appointment</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div style={{ marginTop: "0.5rem" }}>
                                <h5 style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray)", marginBottom: "1rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>
                                    Follow Our Work</h5>
                                <div className="social-links">
                                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
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
                        <span className="section-label">Common Questions</span>
                        <h2 className="section-title fade-in">Frequently <span>Asked Questions</span></h2>
                        <div className="underline-accent center"></div>
                    </div>
                    <div className="faq-grid fade-in delay-1">
                        {[
                            {
                                q: "How does the first consultation work?",
                                a: "Our initial consultation is a relaxed 45-60 minute conversation where we discuss your project, goals, and budget. It can be held at our studio or virtually. We provide an honest assessment and a preliminary design direction at no cost."
                            },
                            {
                                q: "What is your minimum project budget?",
                                a: "We work across a range of budgets and scales, from compact consultations to large-scale architectural commissions. During our first call we'll ensure our engagement structure is the right fit for your investment level."
                            },
                            {
                                q: "How long does a typical project take?",
                                a: "Project timelines vary by scope. An interior design project typically takes 8-16 weeks from concept to installation. Full architectural commissions range from 6 months to 2 years depending on complexity and permitting."
                            },
                            {
                                q: "Do you work outside Dhaka?",
                                a: "Absolutely. While our studio is based in Mirpur, Dhaka, we regularly deliver projects across Chittagong, Sylhet, Rajshahi, and have also worked with diaspora clients on projects internationally."
                            }
                        ].map((faq, i) => (
                            <div key={i} style={{ background: "var(--dark)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "1.75rem", borderLeft: "3px solid var(--orange)" }}>
                                <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.q}</h4>
                                <p style={{ color: "var(--gray)", fontSize: "0.88rem", lineHeight: "1.75" }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ContactPage;
