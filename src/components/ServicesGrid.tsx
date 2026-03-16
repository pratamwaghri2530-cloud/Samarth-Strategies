"use client";

import Link from "next/link";
import { Monitor, Bot, Megaphone, Search } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites that load fast and convert visitors into customers",
    icon: Monitor,
    slug: "web-development",
    emoji: "🌐",
  },
  {
    title: "AI Automations",
    description: "Automate repetitive tasks and serve customers 24/7 with AI",
    icon: Bot,
    slug: "ai-automations",
    emoji: "🤖",
  },
  {
    title: "Google Ads",
    description: "Get in front of customers actively searching for your business",
    icon: Megaphone,
    slug: "google-ads",
    emoji: "📣",
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on Google and get free, consistent traffic",
    icon: Search,
    slug: "seo-optimization",
    emoji: "🔍",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 reveal" style={{ background: "#0A0A0F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#F0EEE9" }}
          >
            What We Do
          </h2>
          <p className="font-sans max-w-2xl mx-auto" style={{ color: "rgba(240,238,233,0.65)", fontSize: "18px" }}>
            Comprehensive digital solutions designed to help Indian offline businesses thrive online.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="service-card rounded-2xl p-8 flex flex-col h-full"
                style={{
                  background: "#13131A",
                  border: "1px solid rgba(249,115,22,0.2)",
                  borderRadius: "16px",
                }}
              >
                {/* Icon block */}
                <div
                  className="inline-flex items-center justify-center rounded-xl mb-6"
                  style={{ width: "56px", height: "56px", background: "rgba(249,115,22,0.1)" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#F97316" }} />
                </div>

                <h3
                  className="font-heading font-bold mb-3"
                  style={{ fontSize: "22px", color: "#F0EEE9" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-sans mb-6 flex-grow leading-relaxed"
                  style={{ color: "rgba(240,238,233,0.6)" }}
                >
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center font-sans font-medium text-sm tracking-[0.05em] uppercase transition-colors duration-200"
                  style={{ color: "#F97316" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#6366F1")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F97316")}
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
