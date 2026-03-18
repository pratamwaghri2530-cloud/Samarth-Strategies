"use client";

import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="logo-glow font-heading font-bold text-2xl tracking-tight mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Samarth Strategies
            </Link>
            <p
              className="font-sans mb-6 leading-relaxed max-w-xs"
              style={{ color: "#555555", fontSize: "14px" }}
            >
              Helping local businesses compete online — everywhere.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram,     href: "#" },
                { Icon: Linkedin,      href: "#" },
                { Icon: MessageCircle, href: "https://wa.me/918850840056" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center rounded-sm transition-all duration-200"
                  style={{ width: "40px", height: "40px", background: "#141414", color: "#555555", border: "1px solid #222222" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#C9A044";
                    (e.currentTarget as HTMLElement).style.borderColor = "#C9A044";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#555555";
                    (e.currentTarget as HTMLElement).style.borderColor = "#222222";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-6" style={{ color: "#FFFFFF", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                ["Web Development",       "/services/web-development"],
                ["AI Automation & Agents","/services/ai-automations"],
                ["Google Ads",            "/services/google-ads"],
                ["SEO Optimization",      "/services/seo-optimization"],
                ["AI Strategy",           "/services/ai-automations"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: "#555555" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A044")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-6" style={{ color: "#FFFFFF", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                ["About Us",  "/about"],
                ["Portfolio", "/portfolio"],
                ["Blog",      "/blog"],
                ["Contact",   "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: "#555555" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A044")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-6" style={{ color: "#FFFFFF", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 font-sans text-sm" style={{ color: "#555555" }}>
              <li>hello@samarthstrategies.com</li>
              <li>+91 8850840056</li>
              <li className="pt-2 text-xs font-medium tracking-widest uppercase" style={{ color: "#444444" }}>
                Available IST &amp; EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid #1E1E1E" }}
        >
          <p className="font-sans text-sm text-center" style={{ color: "#444444" }}>
            © {currentYear} Samarth Strategies. All rights reserved.
          </p>
          <p className="font-sans text-sm text-center" style={{ color: "#444444" }}>
            Built with ❤️ in Mumbai
          </p>
          <div className="flex gap-6">
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="font-sans text-sm transition-colors duration-200"
                style={{ color: "#444444" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
