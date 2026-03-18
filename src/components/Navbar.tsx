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
            className="logo-glow font-heading font-bold text-2xl tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            Samarth Strategies
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-sm transition-colors duration-200"
                style={{ color: "#AAAAAA" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#AAAAAA")}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary px-5 py-2.5 font-sans font-medium text-sm tracking-[0.05em] uppercase"
              style={{ borderRadius: "4px" }}
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: "#FFFFFF" }}
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
          style={{ background: "#0A0A0A", borderBottom: "1px solid #222222" }}
        >
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 font-sans font-medium transition-colors"
                style={{ color: "#888888" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary block px-3 py-3 mt-4 text-center font-sans font-medium tracking-[0.05em] uppercase"
              style={{ borderRadius: "4px" }}
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
