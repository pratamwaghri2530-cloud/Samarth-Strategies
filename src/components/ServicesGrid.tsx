"use client";

import Link from "next/link";
import { Monitor, Megaphone, Search, Bot, Cpu } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Monitor,
    slug: "web-development",
    description:
      "Your business deserves more than a brochure online. We build fast, mobile-first websites that turn visitors into paying customers — with clear messaging, strong design, and built-in lead capture.",
    points: [
      "Custom business websites",
      "Landing pages that convert",
      "Portfolio and service showcase sites",
      "WhatsApp and call integration built-in",
    ],
  },
  {
    title: "AI Automation & Agents",
    icon: Bot,
    slug: "ai-automations",
    description:
      "Autonomous AI systems that work 24/7 — handling customer queries on WhatsApp, booking appointments, following up on leads, and completing repetitive tasks without any human intervention.",
    points: [
      "WhatsApp booking and support agents",
      "Appointment reminders and follow-ups",
      "Lead capture from Instagram and Facebook",
      "Voice agents for missed calls",
      "CRM and invoice automation",
    ],
  },
  {
    title: "Google Ads",
    icon: Megaphone,
    slug: "google-ads",
    description:
      "Stop waiting for customers to find you. We run targeted Google Ads that put your business in front of people actively searching for exactly what you offer — with zero wasted spend.",
    points: [
      "Search and display campaigns",
      "Daily budget monitoring",
      "Call and WhatsApp conversion tracking",
      "ROI reporting every month",
    ],
  },
  {
    title: "SEO Optimization",
    icon: Search,
    slug: "seo-optimization",
    description:
      "When someone in your city searches for your service, you should be the first result they see. We get you ranking on Google Maps and search so customers find you — not your competitors.",
    points: [
      "Google Maps / Local SEO",
      "Keyword targeting for your area",
      "Monthly ranking reports",
      "Google Business Profile optimization",
    ],
  },
  {
    title: "AI Strategy",
    icon: Cpu,
    slug: "ai-automations",
    description:
      "Not sure where AI fits in your business? We map your operations, find the highest-ROI automation opportunities, and build a phased roadmap so you grow without overwhelm.",
    points: [
      "Operations audit & AI opportunity mapping",
      "Custom automation roadmap",
      "Tool selection and integration planning",
      "Team training and handoff",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 reveal" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#FFFFFF" }}
          >
            What We Do
          </h2>
          <p className="font-sans max-w-2xl mx-auto" style={{ color: "#888888", fontSize: "18px" }}>
            Comprehensive digital solutions designed to help local businesses thrive online.
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card flex flex-col p-8"
                style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px" }}
              >
                <div
                  className="inline-flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ width: "48px", height: "48px", background: "rgba(201,160,68,0.08)", border: "1px solid rgba(201,160,68,0.2)", borderRadius: "4px" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#C9A044" }} />
                </div>

                <h3 className="font-heading font-bold mb-3" style={{ fontSize: "18px", color: "#FFFFFF" }}>
                  {service.title}
                </h3>

                <p className="font-sans mb-5 leading-relaxed" style={{ color: "#888888", fontSize: "14px" }}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 font-sans" style={{ fontSize: "13px", color: "#555555" }}>
                      <span className="flex-shrink-0 mt-1.5" style={{ width: "4px", height: "4px", background: "#C9A044", borderRadius: "50%", display: "inline-block" }} />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center font-sans font-medium text-xs tracking-[0.08em] uppercase mt-auto transition-colors duration-200"
                  style={{ color: "#C9A044" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C9A044")}
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
