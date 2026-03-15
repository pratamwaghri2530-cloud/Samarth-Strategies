"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const springValue = useSpring(from, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toString() + suffix
  );

  // Fallback for strict mode or if framer-motion has issues with displayValue
  const [value, setValue] = useState(from.toString() + suffix);

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      // Use exact 4.9 for decimal display when it reaches the end
      if (to === 4.9 && latest > 4.8) {
          setValue("4.9" + suffix);
      } else {
          setValue(Math.round(latest).toString() + suffix);
      }
    });
  }, [springValue, to, suffix]);

  return <motion.span ref={nodeRef}>{to === 4.9 ? value : displayValue}</motion.span>;
}

// Special component for 4.9 rating that doesn't use standard integer rounding
function DecimalCounter({ to, suffix = "" }: { to: string, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState("0.0");

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseFloat(to);
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        const current = start + (end - start) * easeProgress;
        setValue(current.toFixed(1));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setValue(to);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, to]);

  return <span ref={nodeRef}>{value}{suffix}</span>;
}


export default function StatsBar() {
  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "Businesses Helped",
      isDecimal: false
    },
    {
      value: 3,
      suffix: "x",
      label: "Average ROI",
      isDecimal: false
    },
    {
      value: 200,
      suffix: "%",
      label: "Avg. Traffic Growth",
      isDecimal: false
    },
    {
      value: 4.9,
      suffix: "★",
      label: "Client Rating",
      isDecimal: true
    },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
                {stat.isDecimal ? (
                  <DecimalCounter to={stat.value.toString()} suffix={stat.suffix} />
                ) : (
                  <AnimatedCounter to={stat.value as number} suffix={stat.suffix} />
                )}
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
