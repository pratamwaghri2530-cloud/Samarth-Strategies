"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const items = [
    "3 Businesses Helped",
  ];

  return (
    <section className="bg-gray-100 py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm md:text-base font-medium text-gray-600"
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-8">
              <div className="flex items-center text-center">{item}</div>
              {/* Add separator dot if not the last item */}
              {index < items.length - 1 && (
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
