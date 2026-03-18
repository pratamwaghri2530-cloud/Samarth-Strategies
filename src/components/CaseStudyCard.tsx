"use client";

import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  location: string;
  industry: string;
  challenge: string;
  result: string;
  metric: string;
  index?: number;
  delay?: number;
  link?: string;
}

const CARD_GRADIENTS = [
  "linear-gradient(135deg, #0D0D0D 0%, #141414 100%)",
  "linear-gradient(135deg, #0A0A0A 0%, #111111 100%)",
  "linear-gradient(135deg, #0D0D0D 0%, #121212 100%)",
];

export default function CaseStudyCard({
  location, industry, challenge, result, metric,
  index = 0, delay = 0, link,
}: CaseStudyCardProps) {
  const bg = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  const inner = (
    <div
      className="card-overlay relative flex flex-col h-full p-8"
      style={{ minHeight: "320px" }}
    >
      <div className="flex items-start justify-between mb-auto">
        <span
          className="font-sans font-medium text-xs px-3 py-1 tracking-wide uppercase"
          style={{ background: "rgba(201,160,68,0.12)", color: "#C9A044", border: "1px solid rgba(201,160,68,0.25)", borderRadius: "2px" }}
        >
          {location}
        </span>
        <div
          className="card-arrow flex items-center justify-center"
          style={{ width: "36px", height: "36px", background: "rgba(201,160,68,0.1)", color: "#C9A044", borderRadius: "2px" }}
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-heading font-bold mb-4" style={{ fontSize: "18px", color: "#FFFFFF" }}>
          {industry}
        </h3>
        <div className="space-y-3 mb-6">
          <div>
            <span className="font-sans text-xs font-medium uppercase tracking-widest" style={{ color: "#C9A044" }}>
              Challenge
            </span>
            <p className="font-sans text-sm mt-1" style={{ color: "#888888" }}>{challenge}</p>
          </div>
          <div>
            <span className="font-sans text-xs font-medium uppercase tracking-widest" style={{ color: "#FFFFFF" }}>
              Result
            </span>
            <p className="font-sans text-sm mt-1" style={{ color: "#888888" }}>{result}</p>
          </div>
        </div>
        <div
          className="inline-block px-4 py-2"
          style={{ background: "rgba(201,160,68,0.08)", border: "1px solid rgba(201,160,68,0.2)", borderRadius: "2px" }}
        >
          <span className="font-heading font-bold" style={{ fontSize: "18px", color: "#C9A044" }}>
            {metric}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ transitionDelay: `${delay}s` }} className="reveal h-full">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card block h-full"
          style={{ background: bg, border: "1px solid #222222", borderRadius: "4px", minHeight: "320px" }}
        >
          {inner}
        </a>
      ) : (
        <div
          className="portfolio-card block h-full"
          style={{ background: bg, border: "1px solid #222222", borderRadius: "4px", minHeight: "320px" }}
        >
          {inner}
        </div>
      )}
    </div>
  );
}
