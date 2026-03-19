"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-top"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>

          {/* Logo */}
          <Link href="/" className="logo-glow font-heading font-bold text-2xl tracking-tight text-white">
            Samarth Strategies
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link font-sans font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary px-5 py-2.5 font-sans font-semibold text-sm tracking-[0.05em] uppercase"
              style={{ borderRadius: "4px" }}
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-menu md:hidden absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="mobile-nav-link block px-3 py-3 font-sans font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary block px-3 py-3 mt-4 text-center font-sans font-semibold tracking-[0.05em] uppercase"
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
