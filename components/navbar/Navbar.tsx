"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPlus } from "react-icons/fi";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar__logo">
          AJAY<span>™</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="navbar__nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#tools">Tools</a>
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* MOBILE MENU ICON */}
        <button className="navbar__menu" onClick={() => setOpen(true)}>
          <FiMenu />
        </button>
      </header>

      {/* OVERLAY */}
      <div
        className={`nav__overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <aside className={`mobile__nav ${open ? "open" : ""}`}>
        <button className="mobile__close" onClick={() => setOpen(false)}>
          <FiX />
        </button>

        <nav className="mobile__links">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <div className="mobile__projects">
            <span>Projects</span>
            <FiPlus />
          </div>

          <Link href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}
