"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Canada?", href: "#why-canada" },
  { label: "Clinics", href: "#clinics" },
  { label: "For Doctors", href: "#doctors" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Join", href: "#join" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-mist-200 bg-white/90 shadow-soft backdrop-blur"
          : "border-b border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <a href="#top" aria-label="MapleMed home" className="shrink-0">
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-600 transition-colors hover:text-maple-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#join" className="btn-primary">
            Register Interest
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-mist-100 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-mist-200 bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-mist-100 hover:text-maple-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Register Interest
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
