import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import CaseStudyCard from "@/components/CaseStudyCard";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  const caseStudies = [
    {
      industry: "Mumbai Restaurant",
      location: "Mumbai",
      challenge: "Zero online presence",
      result: "300% increase in online orders",
      metric: "+300% Orders",
      link: "https://example.com/mumbai-restaurant"
    },
    {
      industry: "Pune Salon",
      location: "Pune",
      challenge: "Empty appointment slots",
      result: "Booked out 3 weeks in advance",
      metric: "3x Bookings",
      link: "https://example.com/pune-salon"
    },
    {
      industry: "Austin Clinic",
      location: "Austin, TX",
      challenge: "No Google visibility",
      result: "5x more appointment calls",
      metric: "5x Calls",
      link: "https://example.com/austin-clinic"
    }
  ];

  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <StatsBar />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped offline businesses just like yours grow their revenue through targeted digital strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                {...study}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
