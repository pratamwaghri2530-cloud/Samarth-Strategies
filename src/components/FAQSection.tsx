"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does a typical project cost?",
    a: "Our websites start from ₹8,000 and WhatsApp automation systems from ₹12,000. We always give you a clear quote upfront — no hidden fees, ever.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most websites go live in 7–10 days. WhatsApp bots can be set up in 24–48 hours. We move fast because we know your time matters.",
  },
  {
    q: "Do I need to understand AI or technology?",
    a: "Not at all. You run your business — we handle everything technical from start to finish. You just need a phone to see it working.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. We have clients in India, Costa Rica, and the United States. We work remotely with businesses anywhere in the world.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 reveal" style={{ background: "#0A0A0F" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#F0EEE9" }}
          >
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ background: "#13131A", border: "1px solid rgba(249,115,22,0.15)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span
                  className="font-heading font-bold pr-6"
                  style={{ fontSize: "17px", color: "#F97316" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: "#F97316",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {open === i && (
                <div
                  className="px-8 pb-6 font-sans leading-relaxed"
                  style={{ color: "rgba(240,238,233,0.7)", fontSize: "15px" }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
