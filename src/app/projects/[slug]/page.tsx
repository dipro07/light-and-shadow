"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { notFound } from "next/navigation";

const ProjectDetailPage = () => {
    const params = useParams();
    const slug = params.slug;

    const project = siteData.projects.find(p => p.slug === slug);

    if (!project) {
        return notFound();
    }

    const relatedProjects = siteData.projects
        .filter(p => (project as any).relatedIds?.includes(p.id))
        .slice(0, 2);

    return (
        <main>
            {/* HERO */}
            <section className="project-detail-hero">
                <img src={project.bannerImage} alt={project.name} />
                <div className="project-detail-hero-content">
                    <div className="breadcrumb">
                        <Link href="/projects">Projects</Link>
                        <span>/</span>
                        {project.name}
                    </div>
                    <div className="project-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="project-tag">{tag}</span>
                        ))}
                    </div>
                    <h1>{project.name}</h1>
                </div>
            </section>

            {/* BODY */}
            <section className="project-body">
                <div className="container">
                    <div className="project-body-grid">

                        {/* MAIN CONTENT */}
                        <div className="project-main fade-in-left">
                            <h2>Project Overview</h2>
                            {project.overview.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            <h2 style={{ marginTop: "3rem" }}>Design & Credits</h2>
                            <p>{project.designCredits}</p>

                            <div className="project-gallery">
                                {project.gallery.map((img: any, i) => (
                                    <div key={i} className={`project-gallery-img ${img.full ? "full" : ""} ${img.span2 ? "span2" : ""}`}>
                                        <img src={img.image} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <div className="project-sidebar fade-in-right">
                            <div className="project-info-card">
                                <h4>Project Details</h4>
                                {project.details.map((detail, i) => (
                                    <div key={i} className="info-row">
                                        <span className="key">{detail.label}</span>
                                        <span className="val">{detail.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="project-info-card">
                                <h4>Services Provided</h4>
                                {project.services.map((service, i) => (
                                    <div key={i} className="info-row">
                                        <span className="key">
                                            <i className="fa-solid fa-check" style={{ color: "var(--orange)" }}></i>
                                        </span>
                                        <span className="val">{service}</span>
                                    </div>
                                ))}
                            </div>

                            {project.locationInfo && (
                                <div className="project-info-card" style={{ borderLeft: "3px solid var(--orange)" }}>
                                    <h4>Location</h4>
                                    <div className="location-text" style={{ padding: "0.5rem 0", color: "var(--white)", fontSize: "0.9rem" }}>
                                        <i className="fa-solid fa-location-dot" style={{ color: "var(--orange)", marginRight: "0.5rem" }}></i>
                                        {project.locationInfo.address}
                                    </div>
                                    <div className="location-note" style={{ color: "var(--gray)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{project.locationInfo.note}</div>
                                </div>
                            )}

                            {project.credits && (
                                <div className="project-info-card" style={{ borderLeft: "3px solid var(--orange)" }}>
                                    <h4>Project Credits</h4>
                                    {project.credits.map((c, i) => (
                                        <div key={i} className="info-row">
                                            <span className="key">{c.label}</span>
                                            <span className="val" style={{ color: "var(--orange)", fontWeight: 600 }}>{c.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
                                Start a Similar Project <i className="fa-solid fa-arrow-right" style={{ marginLeft: "0.5rem" }}></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* RELATED */}
            {relatedProjects.length > 0 && (
                <section className="related-projects">
                    <div className="container">
                        <div className="section-head" style={{ marginBottom: "2.5rem" }}>
                            <span className="section-label">Explore More</span>
                            <h2 className="section-title">Related <span>Projects</span></h2>
                            <div className="underline-accent"></div>
                        </div>
                        <div className="projects-grid">
                            {relatedProjects.map(rp => (
                                <div key={rp.id} className="project-card">
                                    <img src={rp.image} alt={rp.name} />
                                    <div className="project-overlay">
                                        <div className="project-cat">{rp.category}</div>
                                        <h3 className="project-name">{rp.name}</h3>
                                        <Link href={`/projects/${rp.slug}`} className="btn btn-primary btn-sm project-btn">
                                            View Project
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default ProjectDetailPage;
