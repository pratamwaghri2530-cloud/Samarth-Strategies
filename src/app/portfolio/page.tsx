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
      result: "300% increase in online orders",
      metric: "+300% Orders",
      link: "https://example.com/mumbai-restaurant"
    },
    {
      industry: "Fluteon - Women's Fashion Brand ",
      location: "Mumbai",
      challenge: "Low online presence",
      result: "300% increase in online orders",
      metric: "+300% Orders",
      link: "https://fluteon.com/"
    },
    {
      industry: "VM Service Centre",
      location: "Mumbai",
      challenge: "Low online presence",
      result: "5x more appointment calls",
      metric: "25x Calls",
      link: "https://vmservicecenter.com/"
    },
    {
      industry: "Delhi Retail Shop",
      location: "Delhi",
      challenge: "Low foot traffic",
      result: "40% increase in store visits via Local SEO",
      metric: "+40% Footfall",
      link: "https://example.com/delhi-retail"
    },
    {
      industry: "Bangalore Tech Service",
      location: "Bangalore",
      challenge: "High cost per lead",
      result: "Reduced CPL by 60% with Google Ads optimization",
      metric: "-60% CPL",
      link: "https://example.com/bangalore-tech"
    },
    {
      industry: "Hyderabad Gym",
      location: "Hyderabad",
      challenge: "Manual lead follow-ups losing sales",
      result: "24/7 AI Automation captured 150+ new leads in month 1",
      metric: "150+ Leads",
      link: "https://example.com/hyderabad-gym"
    }
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
