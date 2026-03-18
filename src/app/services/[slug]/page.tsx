import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const servicesData = {
  "web-development": {
    title: "Web Development",
    subtitle: "Custom websites that load fast and convert visitors into customers.",
    description: "Your website is your digital storefront. We build lightning-fast, mobile-responsive websites designed specifically to capture leads and drive sales for your business.",
    benefits: [
      "Custom design tailored to your brand",
      "Mobile-first responsive layouts",
      "Lightning fast loading speeds (Lighthouse 90+)",
      "Built-in on-page SEO best practices",
      "Lead generation forms and booking integrations",
    ],
  },
  "ai-automations": {
    title: "AI Automation & Agents",
    subtitle: "Automate repetitive tasks and serve customers 24/7 with AI.",
    description: "Stop missing out on leads after hours. We implement smart AI chatbots and automated workflows that answer customer questions, book appointments, and capture leads while you sleep.",
    benefits: [
      "24/7 customer query resolution",
      "Automated appointment booking",
      "Lead qualification and routing",
      "WhatsApp & Instagram automated responses",
      "CRM and invoice automation",
    ],
  },
  "google-ads": {
    title: "Google Ads",
    subtitle: "Get in front of customers actively searching for your business.",
    description: "Stop wasting money on ineffective marketing. We create highly targeted Google Ads campaigns that put your business at the top of search results when local customers need you.",
    benefits: [
      "Immediate visibility at the top of Google",
      "Targeted local radius campaigns",
      "Optimized for calls and walk-ins",
      "Continuous A/B testing and optimization",
      "Transparent monthly ROI reporting",
    ],
  },
  "seo-optimization": {
    title: "SEO Optimization",
    subtitle: "Rank higher on Google and get free, consistent traffic.",
    description: "Dominating local search is the key to sustained growth. We optimize your website and Google Business Profile to ensure you show up first when customers search for your services.",
    benefits: [
      "Google Business Profile optimization",
      "Local keyword targeting",
      "High-quality local citations and backlinks",
      "Technical SEO audits and fixes",
      "Monthly ranking and traffic reports",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];
  if (!service) return { title: "Service Not Found" };
  return { title: `${service.title} | Samarth Strategies`, description: service.subtitle };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];
  if (!service) notFound();

  return (
    <>
      <section
        className="pt-36 pb-16 md:pt-48 md:pb-24"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center font-sans text-sm mb-8 transition-colors duration-200"
              style={{ color: "#555555" }}
            >
              ← Back to all services
            </Link>
            <h1
              className="font-heading font-extrabold mb-6"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
            >
              {service.title}
            </h1>
            <p className="font-sans mb-10" style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "#888888", lineHeight: 1.6 }}>
              {service.subtitle}
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-sans font-medium tracking-[0.08em] uppercase text-sm"
              style={{ borderRadius: "4px" }}
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold mb-6" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#FFFFFF" }}>
                Why this matters for your business
              </h2>
              <p className="font-sans leading-relaxed mb-8" style={{ color: "#888888", fontSize: "17px" }}>
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} style={{ color: "#C9A044", flexShrink: 0, marginTop: "2px" }} />
                    <span className="font-sans" style={{ color: "#888888", fontSize: "16px" }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px", padding: "48px" }}>
              <div style={{ aspectRatio: "1", background: "#0A0A0A", border: "1px solid #1E1E1E", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-heading font-bold text-center" style={{ color: "#333333", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {service.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
