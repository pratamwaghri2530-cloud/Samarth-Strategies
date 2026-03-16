"use client";

import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(to * ease));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { display: null, to: 3,   suffix: "+",  label: "Businesses Helped" },
  { display: null, to: 100, suffix: "%",  label: "Client Satisfaction" },
  { display: "24/7",        to: 0,  suffix: "",   label: "AI Automation" },
  { display: "0",           to: 0,  suffix: "",   label: "Missed Leads" },
];

export default function StatsBar() {
  return (
    <section className="py-20 reveal" style={{ background: "#13131A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="font-heading font-extrabold mb-3"
                style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "#F97316", lineHeight: 1 }}
              >
                {stat.display ? (
                  stat.display
                ) : (
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                )}
              </div>
              <p
                className="font-sans font-medium text-sm tracking-[0.08em] uppercase"
                style={{ color: "rgba(240,238,233,0.55)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
