"use client";

import React from "react";
import { siteData } from "@/data/siteData";


const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {siteData.stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className={`stat-item fade-in delay-${index}`}>
                <div className="stat-num">
                  <span
                    className="counter"
                    data-target={stat.value}
                    data-suffix={stat.suffix}
                  >
                    0
                  </span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
              {index < siteData.stats.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};

export default StatsBar;
