"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
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

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process to take your business from offline to online success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gray-200 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="h-full bg-primary origin-left"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 group-hover:border-primary shadow-sm flex items-center justify-center mb-6 transition-colors duration-300 relative">
                  <span className="text-3xl font-heading font-bold text-primary">
                    {step.number}
                  </span>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-xl shadow-md transform group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
