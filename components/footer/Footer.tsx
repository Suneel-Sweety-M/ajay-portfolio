"use client";

import { FiArrowUp } from "react-icons/fi";
import "./footer.css";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* TOP */}
      <div className="footer__top">
        <p className="footer__subtitle">Have a project in mind?</p>
        <Link href="/contact" className="footer__link">
          <h2 className="footer__title">LETS WORK</h2>
        </Link>
      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        <span className="footer__credit">Developed by Kryons®</span>

        <div className="footer__right">
          <span>© Copyright 2026</span>

          <button className="footer__scroll" onClick={scrollToTop}>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
