"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="container">
        <div className="section-head">
          <span className="section-label fade-in">What We Do</span>
          <h2 className="section-title fade-in">
            Our Core <span>Services</span>
          </h2>
          <div className="underline-accent center"></div>
          <p className="section-desc fade-in delay-1">
            From concept to completion, we deliver precision, beauty, and unmatched craftsmanship across every discipline.
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
              <Link href="/services" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ServicesPreview;
