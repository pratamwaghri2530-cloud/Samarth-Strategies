import { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Our Services | Samarth Strategies",
  description: "Comprehensive digital solutions for offline businesses: Web Development, AI Automations, Google Ads, and SEO Optimization.",
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="pt-36 pb-16 md:pt-48 md:pb-24 text-center"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            Digital Solutions for Real Growth
          </h1>
          <p className="font-sans leading-relaxed max-w-3xl mx-auto" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888888" }}>
            We don&apos;t just build websites — we build scalable digital engines that drive traffic,
            capture leads, and increase your revenue.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <HowItWorks />
      <CTASection />
    </>
  );
}
