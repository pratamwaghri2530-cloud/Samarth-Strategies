"use client";

import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  location: string;
  industry: string;
  challenge: string;
  result: string;
  metric: string;
  delay?: number;
  link?: string;
}

// Gradient backgrounds to simulate image backgrounds for each card
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #1a1a1a 0%, #2d1b4e 50%, #1a0a2e 100%)",
  "linear-gradient(135deg, #0d1b0d 0%, #1a2e1a 50%, #0a1a14 100%)",
];
let gradientIndex = 0;

export default function CaseStudyCard({
  location,
  industry,
  challenge,
  result,
  metric,
  delay = 0,
  link,
}: CaseStudyCardProps) {
  const bg = CARD_GRADIENTS[gradientIndex++ % CARD_GRADIENTS.length];

  const CardWrapper = ({ children }: { children: React.ReactNode }) =>
    link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio-card block rounded-2xl h-full" style={{ background: bg, minHeight: "320px" }}>
        {children}
      </a>
    ) : (
      <div className="portfolio-card block rounded-2xl h-full" style={{ background: bg, minHeight: "320px" }}>
        {children}
      </div>
    );

  return (
    <div style={{ transitionDelay: `${delay}s` }} className="reveal h-full">
      <CardWrapper>
        {/* Dark overlay */}
        <div
          className="card-overlay relative flex flex-col h-full p-8 rounded-2xl"
          style={{ background: "rgba(0,0,0,0.55)", minHeight: "320px" }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between mb-auto">
            {/* Location badge */}
            <span
              className="font-sans font-medium text-xs px-3 py-1 rounded-full tracking-wide uppercase"
              style={{ background: "#F97316", color: "#0A0A0F" }}
            >
              {location}
            </span>

            {/* Arrow */}
            <div
              className="card-arrow flex items-center justify-center rounded-full"
              style={{
                width: "36px", height: "36px",
                background: "rgba(249,115,22,0.15)",
                color: "#F97316",
              }}
            >
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Content */}
          <div className="mt-8">
            <h3 className="font-heading font-bold mb-4" style={{ fontSize: "20px", color: "#F0EEE9" }}>
              {industry}
            </h3>

            <div className="space-y-3 mb-6">
              <div>
                <span className="font-sans text-xs font-medium uppercase tracking-widest" style={{ color: "#F97316" }}>
                  Challenge
                </span>
                <p className="font-sans text-sm mt-1" style={{ color: "rgba(240,238,233,0.65)" }}>{challenge}</p>
              </div>
              <div>
                <span className="font-sans text-xs font-medium uppercase tracking-widest" style={{ color: "#6366F1" }}>
                  Result
                </span>
                <p className="font-sans text-sm mt-1" style={{ color: "rgba(240,238,233,0.65)" }}>{result}</p>
              </div>
            </div>

            <div
              className="inline-block rounded-xl px-4 py-2"
              style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)" }}
            >
              <span className="font-heading font-bold" style={{ fontSize: "22px", color: "#F97316" }}>
                {metric}
              </span>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}
