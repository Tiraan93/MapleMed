"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const MAPLE_LINKS = [
  { label: "Mission + Vision", href: "/#mission" },
  { label: "The Difference", href: "/#difference" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Our Story", href: "/#our-story" },
  { label: "FAQ", href: "/#faq" },
  { label: "Join", href: "/#join" },
  { label: "GPTool", href: "/gptool" },
];

const TOOL_LINKS = [
  { label: "MapleMedic", href: "/" },
  { label: "GPTool", href: "/gptool" },
  { label: "SCAcoach", href: "/scacoach" },
];

type BannerMode = "maple" | "tools";

function modeFromPath(pathname: string): BannerMode {
  if (pathname.startsWith("/gptool") || pathname.startsWith("/scacoach")) {
    return "tools";
  }
  return "maple";
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const mode = modeFromPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [displayMode, setDisplayMode] = useState<BannerMode>(mode);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (mode === displayMode) return;
    setAnimating(true);
    const outTimer = window.setTimeout(() => {
      setDisplayMode(mode);
      window.setTimeout(() => setAnimating(false), 40);
    }, 220);
    return () => window.clearTimeout(outTimer);
  }, [mode, displayMode]);

  const links = displayMode === "maple" ? MAPLE_LINKS : TOOL_LINKS;
  const isTools = displayMode === "tools";
  const slideClass = animating
    ? mode === "tools"
      ? "nav-slide-out-left"
      : "nav-slide-out-right"
    : mode === "tools"
      ? "nav-slide-in-right"
      : "nav-slide-in-left";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-mist-200 bg-white/90 shadow-soft backdrop-blur"
          : isTools
            ? "border-b border-mist-200 bg-white/70 backdrop-blur"
            : "border-b border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link
          href={isTools ? "/gptool" : "/"}
          aria-label={isTools ? "MapleMedic GPTool home" : "MapleMedic home"}
          className="shrink-0"
        >
          {isTools ? (
            <span className="inline-flex items-center gap-2.5">
              <Logo markOnly />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-maple-700">Maple</span>
                <span className="text-navy-900">Medic</span>
                <span className="text-navy-900"> GPTool</span>
              </span>
            </span>
          ) : (
            <Logo />
          )}
        </Link>

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-5 overflow-hidden lg:flex xl:gap-7 ${slideClass}`}
        >
          {links.map((link) => {
            const active =
              link.href === "/gptool"
                ? pathname.startsWith("/gptool")
                : link.href === "/scacoach"
                  ? pathname.startsWith("/scacoach")
                  : link.href === "/"
                    ? pathname === "/"
                    : false;
            return (
              <Link
                key={`${displayMode}-${link.href}-${link.label}`}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-maple-700 ${
                  active ? "text-maple-700" : "text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={`hidden lg:block ${slideClass}`}>
          {displayMode === "maple" ? (
            <Link href="/#join" className="btn-primary">
              Register Interest
            </Link>
          ) : (
            <span className="sr-only">Tool navigation</span>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-mist-100 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="site-mobile-menu"
          className="border-t border-mist-200 bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className={`container-page flex flex-col py-4 ${slideClass}`}>
            {links.map((link) => (
              <Link
                key={`mobile-${displayMode}-${link.href}-${link.label}`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-mist-100 hover:text-maple-700"
              >
                {link.label}
              </Link>
            ))}
            {displayMode === "maple" && (
              <Link
                href="/#join"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Register Interest
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
