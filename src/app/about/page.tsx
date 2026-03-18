import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "About Us | Samarth Strategies",
  description: "Learn about the team helping local businesses succeed in the digital world.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 md:pt-48 md:pb-28 text-center reveal"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 7vw, 72px)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            We are{" "}
            <span className="gradient-text-animate">Samarth</span>{" "}
            Strategies
          </h1>
          <p
            className="font-sans leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888888" }}
          >
            We are on a mission to put offline businesses on the digital map, empowering local
            owners with the tools to compete and win.
          </p>
        </div>
      </section>

      <TrustBar />
      <hr className="section-divider" />

      {/* Story */}
      <section className="py-20 md:py-28 reveal" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-heading font-bold mb-6" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#FFFFFF" }}>
                Our Story
              </h2>
              <div className="space-y-4 font-sans leading-relaxed" style={{ color: "#888888", fontSize: "17px" }}>
                <p>
                  Samarth Strategies was founded with a single, clear goal: to bridge the gap
                  between traditional offline businesses and the vast opportunities of the digital world.
                </p>
                <p>
                  We saw too many amazing local businesses — restaurants, clinics, salons, and retail
                  shops — struggle to find customers simply because they lacked an online presence or
                  were wasting money on ineffective marketing.
                </p>
                <p>
                  We don&apos;t use jargon. We don&apos;t sell bloated packages. We deliver clear,
                  measurable results through targeted web development, smart SEO, highly-optimised
                  ads, and cutting-edge AI automations.
                </p>
              </div>
            </div>
            <div
              className="aspect-video lg:aspect-square flex items-center justify-center"
              style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px" }}
            >
              <p
                className="font-heading font-bold text-center px-8"
                style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "#333333", lineHeight: 1.6 }}
              >
                Mumbai × Costa Rica
                <br />× Building the Future
              </p>
            </div>
          </div>

          {/* Team / Founders */}
          <hr className="section-divider mb-20" />
          <div className="max-w-4xl mx-auto mb-20">
            <h2
              className="font-heading font-bold mb-12 text-center"
              style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#FFFFFF" }}
            >
              The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  initials: "PW",
                  name: "Pratam Waghri",
                  role: "Founder — Strategy & Growth",
                  bio: "Mumbai-based entrepreneur leading client strategy, outreach, and business development. His background spans content creation and building AI-powered systems for local businesses.",
                },
                {
                  initials: "AS",
                  name: "Aryesh Shivmare",
                  role: "Co-Founder — Technology",
                  bio: "Leads all technical development — websites, AI automation systems, and integrations. He builds the systems that make our clients' businesses run 24/7.",
                },
              ].map(({ initials, name, role, bio }) => (
                <div
                  key={name}
                  className="service-card p-8 flex flex-col gap-6"
                  style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center font-heading font-extrabold flex-shrink-0"
                      style={{ width: "56px", height: "56px", background: "#C9A044", color: "#000000", fontSize: "18px", borderRadius: "4px" }}
                    >
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold" style={{ fontSize: "17px", color: "#FFFFFF" }}>{name}</h3>
                      <p className="font-sans text-sm" style={{ color: "#C9A044" }}>{role}</p>
                    </div>
                  </div>
                  <p className="font-sans leading-relaxed" style={{ color: "#888888", fontSize: "15px" }}>{bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <hr className="section-divider mb-20" />
          <div className="text-center max-w-5xl mx-auto">
            <h2
              className="font-heading font-bold mb-12"
              style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#FFFFFF" }}
            >
              Our Core Values
            </h2>
            <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: "⚡",
                  title: "Speed is a Service",
                  body: "Every hour your business goes unanswered online is a customer lost. We build systems that respond instantly — so you never lose a lead to slow replies again.",
                },
                {
                  icon: "🎯",
                  title: "Results Over Vanity",
                  body: "We don't care about pretty reports or follower counts. We care about calls, bookings, and revenue. If it doesn't grow your business, we don't build it.",
                },
                {
                  icon: "🤖",
                  title: "AI-First Thinking",
                  body: "Every solution we build starts with one question: how can AI make this faster, smarter, and more powerful? We don't add AI as an afterthought — it's the foundation.",
                },
                {
                  icon: "🔒",
                  title: "Radical Transparency",
                  body: "No hidden fees. No confusing jargon. No fake promises. You always know exactly what we're building, why we're building it, and what it will cost.",
                },
                {
                  icon: "🌍",
                  title: "Global Ambition, Local Soul",
                  body: "We are based in Mumbai but we think global. We have built for clients in India, Costa Rica, and the US — and we bring that global perspective to every local business we work with.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="service-card p-8"
                  style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px" }}
                >
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-heading font-bold mb-3" style={{ fontSize: "17px", color: "#FFFFFF" }}>
                    {title}
                  </h3>
                  <p className="font-sans" style={{ color: "#888888", fontSize: "15px" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />
      <CTASection />
    </>
  );
}
