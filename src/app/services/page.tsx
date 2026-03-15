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
      {/* Page Header */}
      <section className="bg-gray-light pt-32 pb-16 md:pt-40 md:pb-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Digital Solutions for <span className="text-primary">Real Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites; we build scalable digital engines that drive traffic, capture leads, and increase your revenue.
          </p>
        </div>
      </section>

      {/* Reusing existing components */}
      <ServicesGrid />
      <HowItWorks />
      <CTASection />
    </>
  );
}
