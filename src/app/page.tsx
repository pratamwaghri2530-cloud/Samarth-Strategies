import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhatsAppDemo from "@/components/WhatsAppDemo";
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
      link: "https://example.com/mumbai-restaurant",
    },
    {
      industry: "Pune Salon",
      location: "Pune",
      challenge: "Empty appointment slots",
      result: "Booked out 3 weeks in advance",
      metric: "3x Bookings",
      link: "https://example.com/pune-salon",
    },
    {
      industry: "Austin Clinic",
      location: "Austin, TX",
      challenge: "No Google visibility",
      result: "5x more appointment calls",
      metric: "5x Calls",
      link: "https://example.com/austin-clinic",
    },
  ];

  return (
    <>
      <HeroSection />
      <TrustBar />

      <hr className="section-divider" />
      <WhatsAppDemo />

      <hr className="section-divider" />
      <ServicesGrid />

      <hr className="section-divider" />
      <HowItWorks />

      <hr className="section-divider" />
      <StatsBar />

      <hr className="section-divider" />
      <section className="py-20 md:py-28 reveal" style={{ background: "#0A0A0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-heading font-bold mb-4"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#F0EEE9" }}
            >
              Real Results for Real Businesses
            </h2>
            <p
              className="font-sans max-w-2xl mx-auto"
              style={{ fontSize: "18px", color: "rgba(240,238,233,0.65)" }}
            >
              See how we&apos;ve helped offline businesses just like yours grow their revenue
              through targeted digital strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />
      <Testimonials />

      <hr className="section-divider" />
      <CTASection />
    </>
  );
}
