"use client";

import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#13131A",
        borderTop: "none",
        position: "relative",
      }}
    >
      {/* Gradient top border */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, #F97316, #6366F1)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="logo-glow font-heading font-bold text-2xl tracking-tight mb-4 inline-flex items-center"
              style={{ color: "#F0EEE9" }}
            >
              <span style={{ color: "#F97316" }}>S</span>amarth
              <span className="ml-1" style={{ color: "#F97316" }}>S</span>trategies
            </Link>
            <p
              className="font-sans mb-6 leading-relaxed max-w-xs"
              style={{ color: "rgba(240,238,233,0.45)", fontSize: "14px" }}
            >
              Helping local businesses compete online — everywhere.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin,  href: "#" },
                { Icon: MessageCircle, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: "40px", height: "40px",
                    background: "rgba(240,238,233,0.06)",
                    color: "rgba(240,238,233,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#F97316";
                    (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(240,238,233,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(240,238,233,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-bold mb-6" style={{ color: "#F0EEE9", fontSize: "16px" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                ["Web Development",  "/services/web-development"],
                ["AI Automations",   "/services/ai-automations"],
                ["Google Ads",       "/services/google-ads"],
                ["SEO Optimization", "/services/seo-optimization"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: "rgba(240,238,233,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F97316")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,238,233,0.45)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-heading font-bold mb-6" style={{ color: "#F0EEE9", fontSize: "16px" }}>
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
                    style={{ color: "rgba(240,238,233,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F97316")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,238,233,0.45)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold mb-6" style={{ color: "#F0EEE9", fontSize: "16px" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 font-sans text-sm" style={{ color: "rgba(240,238,233,0.45)" }}>
              <li>hello@samarthstrategies.com</li>
              <li>+91 8850840056</li>
              <li
                className="pt-2 text-xs font-medium tracking-widest uppercase"
                style={{ color: "rgba(240,238,233,0.3)" }}
              >
                Available IST &amp; EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(240,238,233,0.06)" }}
        >
          <p className="font-sans text-sm text-center" style={{ color: "rgba(240,238,233,0.3)" }}>
            © {currentYear} Samarth Strategies. All rights reserved.
          </p>
          <p className="font-sans text-sm text-center" style={{ color: "rgba(240,238,233,0.3)" }}>
            Built with ❤️ in Mumbai
          </p>
          <div className="flex gap-6">
            {[
              ["Privacy Policy", "/privacy"],
              ["Terms of Service", "/terms"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="font-sans text-sm transition-colors duration-200"
                style={{ color: "rgba(240,238,233,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EEE9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,238,233,0.3)")}
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
