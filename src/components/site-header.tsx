"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/config/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label={`${site.name} home`}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            alt="OrbitFlo"
            className="wordmark-image"
            height={site.logo.height}
            priority
            sizes="(max-width: 719px) 101px, 120px"
            src={site.logo.src}
            width={site.logo.width}
          />
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav
          aria-label="Primary navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {site.navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button button-small navigation-cta"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
