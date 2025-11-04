import React from "react";
import "./Home.css";
import bg from "./home.jpg";

export default function Home() {
  const line1 = "TURN YOUR VISION";
  const line2 = "INTO A DIGITAL REALITY"; 

  return (
    <section      className="hero-section" style={{ backgroundImage: `url(${bg})` }} id="home">
      <div className="overlay"></div>

      <div className="hero-content">

        {/* Split Text Animation */}
        <h1 className="hero-title">
          <span className="animated-line">
            {[...line1].map((c, i) => (
              <span className="letter" style={{ "--i": i }} key={i}>
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </span>

          <span className="animated-line delay">
            {[...line2].map((c, i) => (
              <span className="letter" style={{ "--i": i }} key={i}>
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </span>
        </h1>

        {/*  Button */}
        <button className="hero-btn"><a href="#about">LEARN MORE</a></button>

      </div>
    </section>
  );
}
