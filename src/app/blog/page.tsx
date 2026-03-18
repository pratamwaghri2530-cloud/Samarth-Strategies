import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog & Insights | Samarth Strategies",
  description: "Digital marketing tips, local SEO guides, and business growth strategies for Indian offline businesses.",
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
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    },
    {
      title: "The ₹12,000 Website That Pays for Itself in a Week",
      excerpt: "A local yoga studio in Kharghar had 5-star reviews but no website. Three weeks after we built one, she had her first batch fully booked from Google searches. This is how it works.",
      category: "WEB DEVELOPMENT",
      date: "March 8, 2026",
      readTime: "4 min read",
      slug: "website-that-pays-for-itself",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
    },
    {
      title: "How We Built a WhatsApp Bot in One Night for a Chiropractic Clinic",
      excerpt: "HSC Chiropractic in Kharghar was getting patient enquiries at 10 PM and replying the next morning. We built them a bot in one night. Here's exactly what we built and how you can too.",
      category: "WHATSAPP AUTOMATION",
      date: "February 28, 2026",
      readTime: "6 min read",
      slug: "whatsapp-bot-chiropractic-clinic",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
    },
    {
      title: "5 Reasons Your Google Business Profile is Costing You Customers",
      excerpt: "87% of customers search online before visiting a local business. If your Google Business Profile has the wrong hours, no photos, or zero reviews — you're invisible. Here's how to fix it in 30 minutes.",
      category: "DIGITAL STRATEGY",
      date: "February 20, 2026",
      readTime: "7 min read",
      slug: "google-business-profile-mistakes",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800",
    },
  ];

  return (
    <>
      <section
        className="pt-36 pb-20 md:pt-48 md:pb-28 text-center reveal"
        style={{ background: "#0A0A0F", borderBottom: "1px solid rgba(240,238,233,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 7vw, 72px)", color: "#F0EEE9", letterSpacing: "-0.02em" }}
          >
            Insights &amp;{" "}
            <span style={{ color: "#F97316" }}>Strategies</span>
          </h1>
          <p
            className="font-sans leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(240,238,233,0.65)" }}
          >
            Actionable advice, guides, and real stories to help you grow your business online.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 reveal" style={{ background: "#0A0A0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post, index) => (
              <article
                key={index}
                className="rounded-2xl overflow-hidden flex flex-col h-full"
                style={{ background: "#13131A", border: "1px solid rgba(240,238,233,0.08)" }}
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
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="font-sans font-semibold text-xs tracking-wider px-3 py-1 rounded-full"
                      style={{ background: "rgba(249,115,22,0.1)", color: "#F97316" }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="font-sans text-xs flex items-center gap-1"
                      style={{ color: "rgba(240,238,233,0.4)" }}
                    >
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span
                      className="font-sans text-xs flex items-center gap-1"
                      style={{ color: "rgba(240,238,233,0.4)" }}
                    >
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    className="font-heading font-bold mb-3"
                    style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "#F0EEE9", lineHeight: 1.3 }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="font-sans leading-relaxed mb-6 flex-grow"
                    style={{ color: "rgba(240,238,233,0.6)", fontSize: "15px" }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    className="pt-6 flex items-center justify-between mt-auto"
                    style={{ borderTop: "1px solid rgba(240,238,233,0.08)" }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-sans font-semibold flex items-center gap-1 transition-colors"
                      style={{ color: "#F97316", fontSize: "14px" }}
                    >
                      Read Article <ArrowRight size={16} />
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
