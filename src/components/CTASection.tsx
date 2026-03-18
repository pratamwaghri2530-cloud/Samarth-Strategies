"use client";

import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";

export default function CTASection() {
  const whatsappUrl =
    "https://wa.me/918850840056?text=Hi%20Samarth%20Strategies%20Team!%20I%20want%20to%20grow%20my%20business%20online.";
  const consultationUrl =
    "https://wa.me/918850840056?text=Hi!%20I%20want%20to%20book%20a%20free%20consultation.";

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden reveal"
      style={{ background: "#0F0F0F", borderTop: "1px solid #1E1E1E" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="font-sans mb-4"
          style={{ color: "#C9A044", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}
        >
          Get Started
        </p>
        <h2
          className="font-heading font-bold mb-6 leading-tight"
          style={{ fontSize: "clamp(28px, 5vw, 56px)", color: "#FFFFFF" }}
        >
          Ready to Grow Your Business Online?
        </h2>

        <p
          className="font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "18px", color: "#888888" }}
        >
          Book a free 30-minute strategy call. No pressure, no jargon — just a
          clear plan for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-4 font-sans font-medium tracking-[0.08em] uppercase text-sm flex items-center justify-center gap-2"
            style={{ borderRadius: "4px" }}
          >
            <Calendar size={18} />
            Book Free Consultation
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto px-8 py-4 font-sans font-medium tracking-[0.08em] uppercase text-sm flex items-center justify-center gap-2"
            style={{ borderRadius: "4px" }}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
