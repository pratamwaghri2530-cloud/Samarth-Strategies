"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";

export default function CTASection() {
  const whatsappUrl = "https://wa.me/918850840056?text=Hi%20Samarth%20Strategies%20Team!%20I%20want%20to%20grow%20my%20business%20online.";
  const calendlyUrl = "#"; // Placeholder calendly link

  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Grow Your Business Online?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call with the Samarth Strategies team. No pressure, no jargon — just a clear plan for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href={calendlyUrl}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-amber-600 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Free Consultation</span>
            </Link>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/5 rounded-lg font-semibold text-lg transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
