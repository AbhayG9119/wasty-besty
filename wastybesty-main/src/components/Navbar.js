import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={closeMenu}>Wasty Besty</Link>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu Toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/videos" onClick={closeMenu}>Videos</NavLink></li>
            <li><NavLink to="/shorts" onClick={closeMenu}>Shorts</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blogs</NavLink></li>
            <li><NavLink to="/bestybuilds" onClick={closeMenu}>Wasty Besty</NavLink></li>
            <li><NavLink to="/plantcareguide" onClick={closeMenu}>Plant Care </NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
