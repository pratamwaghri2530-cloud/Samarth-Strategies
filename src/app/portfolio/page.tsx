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
      link: "https://venessadasilva.vercel.app/"
    },
    {
      industry: "Fluteon - Women's Fashion Brand",
      location: "Mumbai",
      challenge: "No e-commerce channel for their products",
      result: "Online store launched with first sales in week one",
      metric: "Store Live",
      link: "https://fluteon.com/"
    },
    {
      industry: "VM Service Centre",
      location: "Mumbai",
      challenge: "Customers couldn't find them online",
      result: "Google Business profile optimised, calls up noticeably",
      metric: "More Calls",
      link: "https://vmservicecenter.com/"
    },
    
  ];

  return (
    <>
      <section className="bg-gray-light pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real impact for offline businesses. Explore how we've helped our clients achieve measurable digital growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                {...study}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
