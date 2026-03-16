"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "918850840056";
  const message = "Hi Samarth Strategies! I would like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-2xl group transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{ width: "56px", height: "56px", background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} color="#fff" />
      <span
        className="absolute right-full mr-4 text-sm font-sans font-medium py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block"
        style={{ background: "#F0EEE9", color: "#0A0A0F" }}
      >
        Chat with us
      </span>
    </a>
  );
}
