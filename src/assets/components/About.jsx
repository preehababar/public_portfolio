import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-header">
          <span className="accent-line"></span>
          <h2 className="about-title">About Me</h2>
          <span className="accent-line"></span>
        </div>

        <p className="about-text">
          I design and develop <strong>polished digital experiences</strong> —
          from business websites and portfolios to advanced web applications.
          My work blends clean UI, meaningful aesthetics, and seamless
          functionality to create modern online identities that feel premium.
        </p>

        <p className="about-text">
          Every project is tailored to match your vision. I focus on
          <strong> clarity, professionalism, and detail </strong>
          so that your brand stands apart — confidently and beautifully.
        </p>

        <a href="#portfolio"><button className="about-cta">Let’s Work Together</button></a>
      </div>
    </section>
  );
}
