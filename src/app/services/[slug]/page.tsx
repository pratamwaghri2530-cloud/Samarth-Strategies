import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

// This would typically come from a CMS or API
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
      "Lead generation forms and local local booking integrations"
    ],
    color: "bg-blue-50 text-blue-700",
  },
  "ai-automations": {
    title: "AI Automations",
    subtitle: "Automate repetitive tasks and serve customers 24/7 with AI.",
    description: "Stop missing out on leads after hours. We implement smart AI chatbots and automated workflows that answer customer questions, book appointments, and capture leads while you sleep.",
    benefits: [
      "24/7 customer query resolution",
      "Automated appointment booking",
      "Lead qualification and routing",
      "WhatsApp & Instagram automated responses",
      "Reduced operational costs and saved time"
    ],
    color: "bg-purple-50 text-purple-700",
  },
  "google-ads": {
    title: "Google Ads",
    subtitle: "Get in front of customers actively searching for your business.",
    description: "Stop wasting money on ineffective marketing. We create highly targeted Google Ads campaigns that put your business at the top of search results exactly when local customers are looking for your services.",
    benefits: [
      "Immediate visibility at the top of Google",
      "Targeted local radius campaigns",
      "Optimized for calls and walk-ins",
      "Continuous A/B testing and optimization",
      "Transparent reporting on your ROI"
    ],
    color: "bg-green-50 text-green-700",
  },
  "seo-optimization": {
    title: "SEO Optimization",
    subtitle: "Rank higher on Google and get free, consistent traffic.",
    description: "Dominating local search is the key to sustained growth. We optimize your website and Google Business Profile to ensure you show up first when customers search for your services in your city.",
    benefits: [
      "Google Business Profile optimization",
      "Local keyword targeting (e.g., 'Best CA in Mumbai')",
      "High-quality local citations and backlinks",
      "Technical SEO audits and fixes",
      "Monthly ranking and traffic reports"
    ],
    color: "bg-amber-50 text-amber-700",
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];
  
  if (!service) {
    return { title: "Service Not Found" };
  }
  
  return {
    title: `${service.title} | Samarth Strategies`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-light pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-primary font-medium hover:underline mb-8 transition-all">
              &larr; Back to all services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
              {service.subtitle}
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent hover:bg-amber-600 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Why this matters for your business
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 placeholder-image-container">
               {/* Visual placeholder. In a real app, this would be an image or illustration */}
               <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-2 border-dashed border-gray-200">
                  <span className="text-gray-400 font-medium font-heading">Interactive Illustration Here</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
