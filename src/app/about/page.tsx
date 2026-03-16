import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "About Us | Samarth Strategies",
  description:
    "Learn about the team helping Indian offline businesses succeed in the digital world.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 md:pt-48 md:pb-28 text-center reveal"
        style={{ background: "#0A0A0F", borderBottom: "1px solid rgba(240,238,233,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 7vw, 72px)", color: "#F0EEE9", letterSpacing: "-0.02em" }}
          >
            We are{" "}
            <span className="gradient-text-animate">Samarth</span>{" "}
            Strategies
          </h1>
          <p
            className="font-sans leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(240,238,233,0.65)" }}
          >
            We are on a mission to put offline businesses on the digital map, empowering local
            owners with the tools to compete and win.
          </p>
        </div>
      </section>

      <TrustBar />
      <hr className="section-divider" />

      {/* Story + Photo */}
      <section className="py-20 md:py-28 reveal" style={{ background: "#0A0A0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2
                className="font-heading font-bold mb-6"
                style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#F97316" }}
              >
                Our Story
              </h2>
              <div className="space-y-4 font-sans leading-relaxed" style={{ color: "rgba(240,238,233,0.65)", fontSize: "17px" }}>
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

            {/* Replace empty placeholder with gradient block */}
            <div
              className="rounded-2xl aspect-video lg:aspect-square flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #13131A, #1a1a2e)",
                border: "1px solid rgba(240,238,233,0.08)",
              }}
            >
              <p
                className="font-heading font-bold text-center px-8"
                style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "rgba(240,238,233,0.35)", lineHeight: 1.6 }}
              >
                Mumbai × Costa Rica
                <br />× Building the Future
              </p>
            </div>
          </div>

          {/* Core Values */}
          <hr className="section-divider mb-20" />
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="font-heading font-bold mb-12"
              style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#F0EEE9" }}
            >
              Our Core Values
            </h2>
            <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: "🎯",
                  title: "Results First",
                  body: "We don't care about vanity metrics. We care about calls, bookings, and revenue for your business.",
                },
                {
                  icon: "🔍",
                  title: "Transparency",
                  body: "No hidden fees or confusing reports. You'll always know exactly where your investment is going.",
                },
                {
                  icon: "🇮🇳",
                  title: "Local Focus",
                  body: "We understand the unique challenges and opportunities of local Indian markets and businesses.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="service-card rounded-2xl p-8"
                  style={{
                    background: "#13131A",
                    border: "1px solid rgba(249,115,22,0.2)",
                  }}
                >
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3
                    className="font-heading font-bold mb-3"
                    style={{ fontSize: "18px", color: "#F0EEE9" }}
                  >
                    {title}
                  </h3>
                  <p className="font-sans" style={{ color: "rgba(240,238,233,0.6)", fontSize: "15px" }}>
                    {body}
                  </p>
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
