"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const VIDEOS = [
  "/hero-video-1.mp4",
  "/hero-video-2.mp4",
  "/hero-video-3.mp4",
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % VIDEOS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Crossfading video backgrounds */}
      {VIDEOS.map((src, i) => (
        <video
          key={i}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === active ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="hero-gradient" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* Content */}
      <div
        className="hero-content"
        style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center" }}
      >
        <div style={{ maxWidth: "580px" }}>

          {/* Label */}
          <p
            className="font-sans"
            style={{
              color: "#888888",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            AI-Powered Growth for Local Businesses
          </p>

          {/* Headline */}
          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            We don&apos;t just
            <br />
            build websites.
            <br />
            We build businesses.
          </h1>

          {/* Sub-headline */}
          <p
            className="font-sans"
            style={{
              color: "#AAAAAA",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            Samarth Strategies builds AI-powered websites and 24/7 automation
            systems for local businesses — so you get more calls, more bookings,
            and more revenue without lifting a finger.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link href="/contact" className="font-sans hero-btn-primary">
              GET FREE AUDIT →
            </Link>
            <Link href="/portfolio" className="font-sans hero-btn-ghost">
              SEE OUR WORK
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {["3+ Clients", "100% On-Time", "3 sec Response"].map((label, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && (
                  <div style={{ width: "1px", height: "16px", background: "#333333", margin: "0 16px", flexShrink: 0 }} />
                )}
                <span
                  className="font-sans"
                  style={{ color: "#888888", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
