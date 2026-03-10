"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const slides = siteData.hero.slides;

    useEffect(() => {
        setIsLoaded(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className={`hero-slider ${isLoaded ? "is-loaded" : ""}`}>
            {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
                    <img src={slide.image} alt={slide.alt} />
                    <div className="slide-overlay"></div>
                </div>
            ))}

            <div className="hero-content">
                <p className="hero-tagline hero-animate hero-animate-1">
                    <i className="fa-solid fa-minus"></i>&nbsp; {siteData.hero.tagline}
                </p>
                <h1 className="hero-title hero-animate hero-animate-2">
                    {siteData.hero.title.main}
                    <span className="hero-title-accent">{siteData.hero.title.accent}</span>
                </h1>
                <div className="hero-underline hero-animate hero-animate-2"></div>
                <p className="hero-subtitle hero-animate hero-animate-3">{siteData.hero.subtitle}</p>
                <div className="hero-btns hero-animate hero-animate-4">
                    <Link href="/projects" className="btn btn-primary">
                        Explore Projects &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link href="/contact" className="btn btn-outline">
                        Get a Consultation
                    </Link>
                </div>
            </div>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>

            <div className="slider-arrows">
                <button className="slider-arrow" onClick={prevSlide} aria-label="Previous slide">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="slider-arrow" onClick={nextSlide} aria-label="Next slide">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

        </section>
    );
};

export default Hero;
