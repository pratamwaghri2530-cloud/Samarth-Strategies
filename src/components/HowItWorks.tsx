"use client";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Free Audit",
    description: "We analyze your current online presence (or lack of it)",
    subtitle: "We review your online visibility, WhatsApp response time, and Google presence in under 24 hours.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Custom Strategy",
    description: "We build a plan tailored to your business and budget",
    subtitle: "You receive a clear action plan with timelines, deliverables, and fixed pricing. No surprises.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Execute & Grow",
    description: "We execute, track results, and scale what works",
    subtitle: "We build, launch, and track results. You focus on your business — we handle everything else.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 reveal" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold mb-4" style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#FFFFFF" }}>
            How It Works
          </h2>
          <p className="font-sans max-w-2xl mx-auto" style={{ color: "#888888", fontSize: "18px" }}>
            A simple, transparent process to take your business from offline to online success.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute h-[1px] gradient-line"
            style={{ top: "52px", left: "calc(16.66% + 32px)", right: "calc(16.66% + 32px)", zIndex: 0 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="reveal flex flex-col items-center text-center relative" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div
                  className="absolute font-heading font-extrabold select-none pointer-events-none"
                  style={{ fontSize: "80px", color: "rgba(201,160,68,0.06)", top: "-20px", lineHeight: 1, zIndex: 0 }}
                >
                  {step.number}
                </div>
                <div
                  className="relative z-10 flex items-center justify-center rounded-sm mb-6"
                  style={{ width: "80px", height: "80px", background: "#141414", border: "1px solid #222222" }}
                >
                  <span style={{ fontSize: "28px" }}>{step.icon}</span>
                </div>
                <h3 className="font-heading font-bold mb-2 relative z-10" style={{ fontSize: "22px", color: "#FFFFFF" }}>
                  {step.title}
                </h3>
                <p className="font-sans leading-relaxed max-w-xs relative z-10 mb-3" style={{ color: "#888888" }}>
                  {step.description}
                </p>
                <p className="font-sans leading-relaxed max-w-xs relative z-10 text-sm" style={{ color: "#555555" }}>
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
