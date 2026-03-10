"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const FeaturedProjects = () => {
    return (
        <section className="featured-projects">
            <div className="container">
                <div className="section-head fade-in">
                    <div>
                        <span className="section-label">Portfolio</span>
                        <h2 className="section-title">
                            Featured <span>Projects</span>
                        </h2>
                    </div>
                    <Link href="/projects" className="btn btn-outline btn-sm">
                        View All Projects
                    </Link>
                </div>

                <div className="projects-grid">
                    {siteData.projects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`}>
                            <div key={project.id} className={`project-card fade-in delay-${index + 1}`}>
                                <img src={project.image} alt={project.name} />
                                <div className="project-overlay">
                                    <p className="project-cat">{project.category}</p>
                                    <h3 className="project-name">{project.name}</h3>
                                    <Link href={`/projects/${project.slug}`} className="btn btn-primary btn-sm project-btn">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default FeaturedProjects;
