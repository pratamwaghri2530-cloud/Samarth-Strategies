"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services",  href: "/services"  },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About",     href: "/about"     },
    { name: "Blog",      href: "/blog"      },
    { name: "Contact",   href: "/contact"   },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled py-3" : "py-5"
      }`}
      style={!scrolled ? { background: "transparent" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="logo-glow font-heading font-bold text-2xl tracking-tight flex items-center transition-all duration-300"
            style={{ color: "#F0EEE9" }}
          >
            <span style={{ color: "#F97316" }}>S</span>amarth
            <span className="ml-1" style={{ color: "#F97316" }}>S</span>trategies
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-sm transition-colors duration-200"
                style={{ color: "rgba(240,238,233,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F97316")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,238,233,0.7)")}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary px-5 py-2.5 rounded-lg font-sans font-medium text-sm tracking-[0.05em] uppercase"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: "#F0EEE9" }}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="md:hidden absolute w-full shadow-2xl"
          style={{ background: "#0A0A0F", borderBottom: "1px solid rgba(249,115,22,0.2)" }}
        >
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 font-sans font-medium rounded-lg transition-colors"
                style={{ color: "rgba(240,238,233,0.75)" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary block px-3 py-3 mt-4 text-center rounded-lg font-sans font-medium tracking-[0.05em] uppercase"
              onClick={() => setIsOpen(false)}
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
