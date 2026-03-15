import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog & Insights | Samarth Strategies",
  description: "Digital marketing tips, local SEO guides, and business growth strategies for Indian offline businesses.",
};

export default function BlogIndexPage() {
  const posts = [
    {
      title: "Why Your Local Business Needs a Google Business Profile in 2026",
      excerpt: "A complete guide to claiming, optimizing, and ranking your Google Business Profile to attract more local walk-ins.",
      category: "Local SEO",
      date: "March 10, 2026",
      readTime: "5 min read",
      slug: "google-business-profile-guide-2026"
    },
    {
      title: "How Clinics Are Using AI Automations to Book More Appointments",
      excerpt: "Stop losing patients to competitors after hours. Learn how simple AI chatbots integrate with WhatsApp to handle bookings 24/7.",
      category: "AI Automations",
      date: "February 28, 2026",
      readTime: "7 min read",
      slug: "ai-automations-for-clinics"
    },
    {
      title: "The Real Cost of a Slow Website for E-commerce & Retail",
      excerpt: "For every second your site takes to load, you're losing customers. Here's how a fast Next.js website fixes that.",
      category: "Web Development",
      date: "February 15, 2026",
      readTime: "4 min read",
      slug: "cost-of-slow-website"
    },
    {
      title: "Google Ads vs. SEO: Which is better for local Indian businesses?",
      excerpt: "A breakdown of short-term wins versus long-term growth, and how to balance your budget between the two.",
      category: "Marketing Strategy",
      date: "January 22, 2026",
      readTime: "6 min read",
      slug: "google-ads-vs-seo-local-business"
    }
  ];

  return (
    <>
      <section className="bg-gray-light pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Insights & <span className="text-primary">Strategies</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Actionable advice, guides, and updates to help you navigate the digital landscape and scale your business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <span className="text-gray-400 font-medium tracking-wide uppercase">Cover Image Placeholder</span>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-gray-500">
                      {post.readTime}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-primary font-semibold flex items-center hover:text-indigo-800 transition-colors">
                      Read Article <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
