"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Bot, Megaphone, Search } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites that load fast and convert visitors into customers",
      icon: <Monitor className="w-8 h-8 text-accent" />,
      slug: "web-development",
    },
    {
      title: "AI Automations",
      description: "Automate repetitive tasks and serve customers 24/7 with AI",
      icon: <Bot className="w-8 h-8 text-accent" />,
      slug: "ai-automations",
    },
    {
      title: "Google Ads",
      description: "Get in front of customers actively searching for your business",
      icon: <Megaphone className="w-8 h-8 text-accent" />,
      slug: "google-ads",
    },
    {
      title: "SEO Optimization",
      description: "Rank higher on Google and get free, consistent traffic",
      icon: <Search className="w-8 h-8 text-accent" />,
      slug: "seo-optimization",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help Indian offline businesses thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-amber-50 rounded-lg inline-block w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-primary font-semibold hover:text-indigo-800 transition-colors mt-auto"
              >
                Learn More <span className="ml-1 text-lg leading-none">&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
