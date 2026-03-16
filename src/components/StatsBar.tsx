"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * easeProgress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(to);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, to]);

  return <span ref={nodeRef}>{value}{suffix}</span>;
}

export default function StatsBar() {
  const stats = [
    {
      value: 3,
      suffix: "",
      label: "Businesses Helped",
    },
    {
      value: 3,
      suffix: "x",
      label: "Average ROI",
    },
    {
      value: 200,
      suffix: "%",
      label: "Avg. Traffic Growth",
    },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent mb-2">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 font-medium text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
