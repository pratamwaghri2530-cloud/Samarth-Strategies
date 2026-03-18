"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Fixed particle data — no random values to avoid hydration mismatch
const PARTICLES = [
  { left: "5%",  animationDuration: "9s",  animationDelay: "0s"    },
  { left: "12%", animationDuration: "13s", animationDelay: "1.2s"  },
  { left: "18%", animationDuration: "8s",  animationDelay: "3.5s"  },
  { left: "24%", animationDuration: "11s", animationDelay: "0.7s"  },
  { left: "30%", animationDuration: "15s", animationDelay: "5.1s"  },
  { left: "36%", animationDuration: "9s",  animationDelay: "2.3s"  },
  { left: "42%", animationDuration: "12s", animationDelay: "4.0s"  },
  { left: "48%", animationDuration: "10s", animationDelay: "1.6s"  },
  { left: "54%", animationDuration: "14s", animationDelay: "0.4s"  },
  { left: "60%", animationDuration: "8s",  animationDelay: "3.0s"  },
  { left: "66%", animationDuration: "11s", animationDelay: "5.8s"  },
  { left: "72%", animationDuration: "9s",  animationDelay: "2.7s"  },
  { left: "78%", animationDuration: "13s", animationDelay: "0.9s"  },
  { left: "84%", animationDuration: "10s", animationDelay: "4.4s"  },
  { left: "90%", animationDuration: "12s", animationDelay: "1.8s"  },
  { left: "8%",  animationDuration: "16s", animationDelay: "6.2s"  },
  { left: "15%", animationDuration: "9s",  animationDelay: "2.1s"  },
  { left: "22%", animationDuration: "11s", animationDelay: "4.8s"  },
  { left: "33%", animationDuration: "8s",  animationDelay: "0.2s"  },
  { left: "44%", animationDuration: "14s", animationDelay: "3.9s"  },
  { left: "56%", animationDuration: "10s", animationDelay: "1.4s"  },
  { left: "67%", animationDuration: "12s", animationDelay: "5.5s"  },
  { left: "76%", animationDuration: "9s",  animationDelay: "2.9s"  },
  { left: "87%", animationDuration: "13s", animationDelay: "0.6s"  },
  { left: "94%", animationDuration: "11s", animationDelay: "4.2s"  },
  { left: "3%",  animationDuration: "15s", animationDelay: "7.0s"  },
  { left: "27%", animationDuration: "8s",  animationDelay: "1.1s"  },
  { left: "51%", animationDuration: "10s", animationDelay: "3.3s"  },
  { left: "70%", animationDuration: "12s", animationDelay: "6.5s"  },
  { left: "96%", animationDuration: "9s",  animationDelay: "2.5s"  },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: "100vh", background: "#0A0A0F" }}
    >
      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: "100%",
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}

      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          top: "-10%", right: "-10%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          bottom: "10%", left: "-5%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-sans font-medium mb-10"
          style={{ background: "rgba(249,115,22,0.1)", color: "#F97316" }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full"
              style={{ background: "#F97316", opacity: 0.75 }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "#F97316" }}
            />
          </span>
          Growing Indian Businesses, Digitally
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-extrabold leading-tight mb-6"
          style={{
            fontSize: "clamp(36px, 7vw, 72px)",
            color: "#F0EEE9",
            letterSpacing: "-0.02em",
          }}
        >
          We don&apos;t just build websites.
          <br />
          <span style={{ color: "#F97316" }}>We build businesses.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(240,238,233,0.65)" }}
        >
          Samarth Strategies helps local businesses get found online, automate
          customer conversations, and grow revenue — with AI-powered websites
          and smart automation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact"
            className="btn-primary w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-medium tracking-[0.1em] uppercase text-sm flex items-center justify-center gap-2"
          >
            Get Free Audit <ArrowRight size={18} />
          </Link>
          <Link
            href="/portfolio"
            className="btn-ghost w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-medium tracking-[0.1em] uppercase text-sm"
          >
            See Our Work
          </Link>
        </div>

        {/* Micro-stats */}
        <div
          className="inline-flex items-center gap-0 rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(240,238,233,0.08)",
            background: "rgba(240,238,233,0.03)",
          }}
        >
          {[
            { value: "3 Businesses", label: "Served" },
            { value: "₹0 Wasted",    label: "On Fluff" },
            { value: "24/7",         label: "Automation" },
          ].map((stat, i) => (
            <div key={i} className="flex items-stretch">
              {i > 0 && (
                <div style={{ width: "1px", background: "#F97316", opacity: 0.5, margin: "12px 0" }} />
              )}
              <div className="px-6 py-4 text-center">
                <div
                  className="font-heading font-bold"
                  style={{ fontSize: "20px", color: "#F0EEE9" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-sans"
                  style={{ fontSize: "11px", color: "rgba(240,238,233,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
