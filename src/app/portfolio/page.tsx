import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Portfolio | Samarth Strategies",
  description: "See the real results we've delivered for businesses across India and beyond.",
};

export default function PortfolioPage() {
  const caseStudies = [
    {
      industry: "Vanessa da Silva — Yoga Studio",
      location: "Costa Rica",
      challenge: "Zero online presence — no website, not findable on Google",
      result: "Complete professional website built and live in 7 days. First enquiries received within 48 hours of launch.",
      metric: "Website Live in 7 Days",
      link: "https://venessadasilva.vercel.app/",
    },
    {
      industry: "Fluteon — Women's Fashion Brand",
      location: "Mumbai",
      challenge: "No e-commerce channel for their products",
      result: "Full online store launched with first sales recorded in week one of going live.",
      metric: "First Sales in Week 1",
      link: "https://fluteon.com/",
    },
    {
      industry: "VM Service Centre",
      location: "Mumbai",
      challenge: "Customers couldn't find them online",
      result: "Google Business Profile fully optimised — calls increased noticeably within first month.",
      metric: "More Customer Calls",
      link: "https://vmservicecenter.com/",
    },
  ];

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
            Our Portfolio
          </h1>
          <p
            className="font-sans leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888888" }}
          >
            Real impact for real businesses. Explore how we&apos;ve helped our clients achieve
            measurable digital growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} index={index} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />
      <CTASection />
    </>
  );
}
