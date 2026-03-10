"use client";

import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  label?: string;
}

const PageHero = ({ title, subtitle, image, label }: PageHeroProps) => {
  return (
    <section className="page-hero">
      <img src={image} alt={title} />
      <div className="page-hero-content">
        {label && <span className="section-label">{label}</span>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

    </section>
  );
};

export default PageHero;
