// NavBar.jsx
import React from "react";
import "./NavBar.css";


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg skin-bg shadow-sm py-3 fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center gap-5">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold premium-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold premium-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold premium-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold premium-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
