"use client";

import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";

export default function CTASection() {
  const whatsappUrl =
    "https://wa.me/918850840056?text=Hi%20Samarth%20Strategies%20Team!%20I%20want%20to%20grow%20my%20business%20online.";
  const calendlyUrl = "#";

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden reveal"
      style={{ background: "#13131A" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          top: "-20%", right: "-10%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          bottom: "-10%", left: "-5%",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-heading font-bold mb-6 leading-tight"
          style={{ fontSize: "clamp(28px, 5vw, 56px)", color: "#F0EEE9" }}
        >
          Ready to Grow Your Business Online?
        </h2>

        <p
          className="font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "18px", color: "rgba(240,238,233,0.65)" }}
        >
          Book a free 30-minute strategy call. No pressure, no jargon — just a
          clear plan for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={calendlyUrl}
            className="btn-primary w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-medium tracking-[0.1em] uppercase text-sm flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            Book Free Consultation
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-medium tracking-[0.1em] uppercase text-sm flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
