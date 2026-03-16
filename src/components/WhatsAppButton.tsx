"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  // Replace with actual WhatsApp number and message
  const phoneNumber = "918850840056";
  const message = "Hi Samarth Strategies! I would like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Chat with us
      </span>
    </motion.a>
  );
}
