"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages where the hero is dark — navbar starts transparent
  const isDarkHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled || !isDarkHero ? "bg-white shadow-sm" : "bg-transparent";
  const linkColor = scrolled || !isDarkHero ? "text-[#1a2e44] hover:text-[#c9973a]" : "text-white/90 hover:text-white";
  const logoColor = scrolled || !isDarkHero ? "text-[#1a2e44]" : "text-white";
  const hamColor = scrolled || !isDarkHero ? "text-[#1a2e44]" : "text-white";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo — text-based */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {/* Hardhat icon */}
          <svg
            width="28" height="28" viewBox="0 0 28 28" fill="none"
            className={`transition-colors duration-300 ${scrolled || !isDarkHero ? "text-[#c9973a]" : "text-[#c9973a]"}`}
          >
            <rect x="4" y="15" width="20" height="4" rx="1" fill="currentColor" />
            <path d="M7 15V11C7 7.686 10.134 5 14 5C17.866 5 21 7.686 21 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 15V12C11 10.343 12.343 9 14 9C15.657 9 17 10.343 17 12V15" fill="currentColor" />
          </svg>
          <div className={`transition-colors duration-300 ${logoColor}`}>
            <div className="text-sm font-bold tracking-wide leading-none font-[family-name:var(--font-manrope)]">
              West Fraser
            </div>
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase leading-none mt-0.5 text-[#c9973a]">
              Construction
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors ${linkColor} ${
                  pathname === l.href ? "border-b-2 border-[#c9973a] pb-0.5" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#c9973a] text-white text-sm font-semibold px-5 py-2.5 tracking-wide hover:bg-[#a87828] transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 transition-colors ${hamColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium ${pathname === l.href ? "text-[#c9973a]" : "text-[#1a2e44]"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link
              href="/contact"
              className="block text-center bg-[#c9973a] text-white text-sm font-semibold px-5 py-3 tracking-wide hover:bg-[#a87828] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
