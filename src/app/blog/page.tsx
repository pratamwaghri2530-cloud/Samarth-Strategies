import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog & Insights | Samarth Strategies",
  description: "Digital marketing tips, local SEO guides, and business growth strategies for local businesses.",
};

export default function BlogIndexPage() {
  const posts = [
    {
      title: "Why Your Clinic Is Losing Patients After 7 PM",
      excerpt: "Most clinics respond to WhatsApp enquiries the next morning. By then, the patient has already booked with someone else. Here's how AI automation keeps your practice open 24 hours a day.",
      category: "AI AUTOMATION",
      date: "March 15, 2026",
      readTime: "5 min read",
      slug: "why-your-clinic-loses-patients-after-7pm",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    },
    {
      title: "The ₹12,000 Website That Pays for Itself in a Week",
      excerpt: "A local yoga studio in Kharghar had 5-star reviews but no website. Three weeks after we built one, she had her first batch fully booked from Google searches. This is how it works.",
      category: "WEB DEVELOPMENT",
      date: "March 8, 2026",
      readTime: "4 min read",
      slug: "website-that-pays-for-itself",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800",
    },
    {
      title: "How We Built a WhatsApp Bot in One Night for a Chiropractic Clinic",
      excerpt: "HSC Chiropractic in Kharghar was getting patient enquiries at 10 PM and replying the next morning. We built them a bot in one night. Here's exactly what we built and how you can too.",
      category: "WHATSAPP AUTOMATION",
      date: "February 28, 2026",
      readTime: "6 min read",
      slug: "whatsapp-bot-chiropractic-clinic",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    },
    {
      title: "5 Reasons Your Google Business Profile is Costing You Customers",
      excerpt: "87% of customers search online before visiting a local business. If your Google Business Profile has the wrong hours, no photos, or zero reviews — you're invisible. Here's how to fix it in 30 minutes.",
      category: "DIGITAL STRATEGY",
      date: "February 20, 2026",
      readTime: "7 min read",
      slug: "google-business-profile-mistakes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    },
  ];

  return (
    <>
      <section
        className="pt-36 pb-20 md:pt-48 md:pb-28 text-center reveal"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 7vw, 72px)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            Insights &amp; Strategies
          </h1>
          <p className="font-sans leading-relaxed max-w-3xl mx-auto" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888888" }}>
            Actionable advice, guides, and real stories to help you grow your business online.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 reveal" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="flex flex-col h-full"
                style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px", overflow: "hidden" }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <span
                      className="font-sans font-medium text-xs tracking-wider px-3 py-1"
                      style={{ background: "rgba(201,160,68,0.1)", color: "#C9A044", border: "1px solid rgba(201,160,68,0.25)", borderRadius: "2px" }}
                    >
                      {post.category}
                    </span>
                    <span className="font-sans text-xs flex items-center gap-1" style={{ color: "#555555" }}>
                      <Calendar size={11} />{post.date}
                    </span>
                    <span className="font-sans text-xs flex items-center gap-1" style={{ color: "#555555" }}>
                      <Clock size={11} />{post.readTime}
                    </span>
                  </div>

                  <h2
                    className="font-heading font-bold mb-3"
                    style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "#FFFFFF", lineHeight: 1.3 }}
                  >
                    {post.title}
                  </h2>

                  <p className="font-sans leading-relaxed mb-6 flex-grow" style={{ color: "#888888", fontSize: "15px" }}>
                    {post.excerpt}
                  </p>

                  <div className="pt-5 flex items-center justify-between mt-auto" style={{ borderTop: "1px solid #1E1E1E" }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-sans font-medium flex items-center gap-1 transition-colors"
                      style={{ color: "#C9A044", fontSize: "13px", letterSpacing: "0.05em" }}
                    >
                      Read Article <ArrowRight size={14} />
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
