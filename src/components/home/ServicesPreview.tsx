"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="container">
        <div className="section-head">
          <span className="section-label fade-in">{siteData.homePage.servicesPreview.tagline}</span>
          <h2 className="section-title fade-in">
            {siteData.homePage.servicesPreview.titleMain} <span>{siteData.homePage.servicesPreview.titleAccent}</span>
          </h2>
          <div className="underline-accent center"></div>
          <p className="section-desc fade-in delay-1">
            {siteData.homePage.servicesPreview.description}
          </p>
        </div>

        <div className="services-grid">
          {siteData.services.slice(0, 3).map((service, index) => (
            <div key={service.id} className={`service-card fade-in delay-${index + 1}`}>
              <div className="service-icon">
                <i className={`fa-solid fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={siteData.homePage.servicesPreview.buttonAllLink} className="service-link">
                {siteData.homePage.servicesPreview.buttonText} <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href={siteData.homePage.servicesPreview.buttonAllLink} className="btn btn-outline">
            {siteData.homePage.servicesPreview.buttonAllText}
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ServicesPreview;
