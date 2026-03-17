import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Portfolio | Samarth Strategies",
  description: "See the real results we've delivered for offline businesses across India and beyond.",
};

export default function PortfolioPage() {
  const caseStudies = [
    {
      industry: "Vanessa da Silva - Yoga Studio",
      location: "Costa Rica",
      challenge: "Zero online presence",
      result: "Complete digital presence built from zero",
      metric: "Website Live",
      link: "https://venessadasilva.vercel.app/",
    },
    {
      industry: "Fluteon - Women's Fashion Brand",
      location: "Mumbai",
      challenge: "No e-commerce channel for their products",
      result: "Online store launched with first sales in week one",
      metric: "Store Live",
      link: "https://fluteon.com/",
    },
    {
      industry: "VM Service Centre",
      location: "Mumbai",
      challenge: "Customers couldn't find them online",
      result: "Google Business profile optimised, calls up noticeably",
      metric: "More Calls",
      link: "https://vmservicecenter.com/",
    },
  ];

  return (
    <>
      <section
        className="pt-36 pb-16 md:pt-48 md:pb-24 text-center"
        style={{ background: "#0A0A0F", borderBottom: "1px solid rgba(240,238,233,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "#F0EEE9", letterSpacing: "-0.02em" }}
          >
            Our <span style={{ color: "#F97316" }}>Portfolio</span>
          </h1>
          <p
            className="font-sans leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(240,238,233,0.65)" }}
          >
            Real impact for offline businesses. Explore how we&apos;ve helped our clients achieve
            measurable digital growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#0A0A0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                {...study}
                index={index}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />
      <CTASection />
    </>
  );
}
