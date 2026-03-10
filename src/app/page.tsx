"use client";

import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsBar from "@/components/home/StatsBar";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Hero />

            {/* About Snippet */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image-wrap fade-in-left">
                            <img src="/img/img6.jpg" alt="Studio portfolio" />
                            <div className="about-badge">
                                <div className="num">10+</div>
                                <div className="label">Years of Excellence</div>
                            </div>
                        </div>
                        <div className="about-text fade-in-right">
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title">Design Is Not Just What It <span>Looks Like</span></h2>
                            <div className="underline-accent"></div>
                            <p>At Light & Shadow Arch. Studio, we believe that great architecture is a conversation between structure and sensation. Founded with a vision to redefine the built environment in Bangladesh, our studio has grown into a trusted name for discerning clients seeking design that is both breathtaking and functional.</p>
                            <p>Every project we take on is a deep study in light, proportion, material, and culture, resulting in spaces that feel not just designed, but discovered. We balance rigorous technical expertise with a deeply humanistic design philosophy.</p>
                            <div className="about-features">
                                <div className="about-feat-item"><i className="fa-solid fa-check-circle"></i> Award-winning designs</div>
                                <div className="about-feat-item"><i className="fa-solid fa-check-circle"></i> BIM-enabled workflow</div>
                                <div className="about-feat-item"><i className="fa-solid fa-check-circle"></i> Sustainable approach</div>
                                <div className="about-feat-item"><i className="fa-solid fa-check-circle"></i> On-time delivery</div>
                            </div>
                            <Link href="/about" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                                Discover Our Story
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
                    <span className="section-label fade-in">Start Your Journey</span>
                    <h2 className="fade-in delay-1">Ready to Transform <span style={{ color: "var(--orange)" }}>Your Space?</span></h2>
                    <p className="fade-in delay-2" style={{ maxWidth: "600px", margin: "1.5rem auto 2.5rem", color: "var(--gray-light)" }}>
                        Whether it's a dream home, a landmark office, or a hospitality haven, we're ready to make it extraordinary.
                    </p>
                    <Link href="/contact" className="btn btn-primary fade-in delay-3">
                        Get a Free Consultation &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </>
    );
}
