"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__content">
        <span className="notfound__code">404</span>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/" className="notfound__btn">
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    </section>
  );
}
