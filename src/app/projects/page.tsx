"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { siteData } from "@/data/siteData";
import Link from "next/link";

const ProjectsPage = () => {
    const [filter, setFilter] = useState("all");
    const categories = ["all", ...new Set(siteData.projects.map(p => p.category.toLowerCase()))];

    const filteredProjects = filter === "all"
        ? siteData.projects
        : siteData.projects.filter(p => p.category.toLowerCase() === filter);

    return (
        <main>
            <PageHero
                title="Our Projects"
                subtitle="A curated selection of our distinguished completed and proposed works."
                image="/img/projects/dewan8.jpg"
                label="Portfolio"
            />

            <section className="projects-full">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-label">Selected Works</span>
                        <h2 className="section-title fade-in">Explore Our <span>Portfolio</span></h2>
                        <div className="underline-accent center"></div>
                    </div>

                    <div className="filter-tabs fade-in">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-tab ${filter === cat ? "active" : ""}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat === "all" ? "All Projects" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="projects-masonry">
                        {filteredProjects.map((project, i) => (
                            <Link href={`/projects/${project.slug}`}>
                                <div key={project.id} className={`project-item fade-in ${i > 0 ? `delay-${i}` : ""}`}>
                                    <img src={project.image} alt={project.name} />
                                    <div className="project-item-overlay">
                                        <div className="cat">{project.category}</div>
                                        <h4><Link href={`/projects/${project.slug}`}>{project.name}</Link></h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="section-label fade-in">Commission Your Project</span>
                    <h2 className="fade-in delay-1">Have a Space That Needs to <span style={{ color: "var(--orange)" }}>Come Alive?</span></h2>
                    <p style={{ maxWidth: "600px", margin: "1.5rem auto 2.5rem", color: "var(--gray-light)" }} className="fade-in delay-2">
                        We'd love to hear about your project. Let's start with a conversation.
                    </p>
                    <Link href="/contact" className="btn btn-primary fade-in delay-3">
                        Start a Project &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default ProjectsPage;
