"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  location: string;
  industry: string;
  challenge: string;
  result: string;
  metric: string;
  delay?: number;
  link?: string;
}

export default function CaseStudyCard({
  location,
  industry,
  challenge,
  result,
  metric,
  delay = 0,
  link,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary border-l border-r border-b border-gray-100 overflow-hidden group flex flex-col h-full hover:-translate-y-2"
    >
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 block">
              {location}
            </span>
            <h3 className="text-xl font-heading font-bold text-foreground">
              {industry}
            </h3>
          </div>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-gray-400 transition-colors cursor-pointer">
              <ArrowUpRight size={20} />
            </a>
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-gray-400 transition-colors">
              <ArrowUpRight size={20} />
            </div>
          )}
        </div>

        <div className="mb-6 flex-grow">
          <div className="mb-4">
            <span className="text-sm font-semibold text-gray-900 block mb-1">Challenge:</span>
            <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-900 block mb-1">Result:</span>
            <p className="text-gray-600 text-sm leading-relaxed">{result}</p>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="text-3xl font-heading font-black text-accent mb-1">
            {metric}
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Key Metric
          </div>
        </div>
      </div>
    </motion.div>
  );
}
