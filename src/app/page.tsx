import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
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
      <FAQSection />

      <hr className="section-divider" />
      <Testimonials />

      <hr className="section-divider" />
      <CTASection />
    </>
  );
}
