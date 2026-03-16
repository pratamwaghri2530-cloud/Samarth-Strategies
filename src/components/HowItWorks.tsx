"use client";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Free Audit",
    description: "We analyze your current online presence (or lack of it)",
  },
  {
    number: "02",
    icon: "📋",
    title: "Custom Strategy",
    description: "We build a plan tailored to your business and budget",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Execute & Grow",
    description: "We execute, track results, and scale what works",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 reveal" style={{ background: "#0A0A0F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#F0EEE9" }}
          >
            How It Works
          </h2>
          <p className="font-sans max-w-2xl mx-auto" style={{ color: "rgba(240,238,233,0.65)", fontSize: "18px" }}>
            A simple, transparent process to take your business from offline to online success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting gradient line (desktop) */}
          <div
            className="hidden md:block absolute h-[2px] gradient-line"
            style={{ top: "52px", left: "calc(16.66% + 32px)", right: "calc(16.66% + 32px)", zIndex: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="reveal flex flex-col items-center text-center relative"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Large background number */}
                <div
                  className="absolute font-heading font-extrabold select-none pointer-events-none"
                  style={{
                    fontSize: "80px",
                    color: "rgba(249,115,22,0.08)",
                    top: "-20px",
                    lineHeight: 1,
                    zIndex: 0,
                  }}
                >
                  {step.number}
                </div>

                {/* Step circle */}
                <div
                  className="relative z-10 flex items-center justify-center rounded-full mb-6 transition-all duration-300"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#13131A",
                    border: "2px solid rgba(249,115,22,0.3)",
                  }}
                >
                  <span style={{ fontSize: "28px" }}>{step.icon}</span>
                </div>

                <h3
                  className="font-heading font-bold mb-3 relative z-10"
                  style={{ fontSize: "22px", color: "#F0EEE9" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-sans leading-relaxed max-w-xs relative z-10"
                  style={{ color: "rgba(240,238,233,0.6)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
