import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./Portfolio.css";

import img1 from "./work1.jpg";
import img2 from "./work2.jpg";
import img3 from "./work3.jpg";
import img4 from "./work4.jpg";
import img5 from "./work5.jpg";
import img6 from "./work6.jpg";
import img7 from "./work7.jpg";
import img8 from "./work8.jpg"; 
import img9 from "./work9.jpg";


export default function Portfolio() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="premium-portfolio" id="portfolio">
      {/* HERO / INTRO */}
      <header className="pf-hero">
        <div className="pf-hero-inner">
          <h1 className="pf-hero-title">Selected Work</h1>
          <p className="pf-hero-sub">
            A curated collection of refined web experiences — crafted with intention,
            clarity and attention to detail.
          </p>
        </div>
      </header>

      {/* GALLERY */}
      <div className="pf-inner">
        <PhotoProvider>
          <div className="pf-grid">
            {images.map((src, i) => (
              <PhotoView key={i} src={src}>
                <article className="pf-card" role="button" tabIndex={0}>
                  <img src={src} alt={`work-${i + 1}`} className="pf-image" />
                  <div className="pf-glass">
                    <div className="pf-label">View</div>
                  </div>
                </article>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>

      {/* subtle footer spacer */}
      <div style={{ height: 80 }} />
    </section>
  );
}
