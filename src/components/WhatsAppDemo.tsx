"use client";

import { useState, useEffect } from "react";

const MESSAGES = [
  { id: 0, from: "patient", text: "Hi, I need to book an appointment" },
  { id: 1, from: "bot",     text: "Good evening! 🙏 Welcome to HSC Chiropractic.\nIs this your first visit?" },
  { id: 2, from: "patient", text: "Yes, first time" },
  { id: 3, from: "bot",     text: "Please share: Patient name,\nAge, Address & Reference 📋" },
  { id: 4, from: "patient", text: "Rahul Sharma, 35, Mumbai" },
  { id: 5, from: "bot",     text: "✅ Slot confirmed for Tomorrow 2PM!\nPayment link sent. 🙏" },
];

const SCHEDULE = [
  { at: 400,   action: "show-msg",            idx: 0 },
  { at: 1000,  action: "show-typing"                 },
  { at: 2600,  action: "hide-typing-show-msg", idx: 1 },
  { at: 3100,  action: "show-typing"                 },
  { at: 4200,  action: "hide-typing-show-msg", idx: 2 },
  { at: 4700,  action: "show-typing"                 },
  { at: 6700,  action: "hide-typing-show-msg", idx: 3 },
  { at: 7200,  action: "show-typing"                 },
  { at: 8300,  action: "hide-typing-show-msg", idx: 4 },
  { at: 8800,  action: "show-typing"                 },
  { at: 10400, action: "hide-typing-show-msg", idx: 5 },
  { at: 12500, action: "fade-out"                    },
];

const CYCLE_MS = 15000;

export default function WhatsAppDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping,   setShowTyping]   = useState(false);
  const [fading,       setFading]       = useState(false);
  const [revision,     setRevision]     = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    setShowTyping(false);
    setFading(false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    SCHEDULE.forEach(({ at, action, idx }) => {
      timers.push(setTimeout(() => {
        if (action === "show-msg")              setVisibleCount((c) => Math.max(c, (idx ?? 0) + 1));
        else if (action === "show-typing")      setShowTyping(true);
        else if (action === "hide-typing-show-msg") {
          setShowTyping(false);
          setVisibleCount((c) => Math.max(c, (idx ?? 0) + 1));
        } else if (action === "fade-out")       setFading(true);
      }, at));
    });
    timers.push(setTimeout(() => setRevision((r) => r + 1), CYCLE_MS));
    return () => timers.forEach(clearTimeout);
  }, [revision]);

  return (
    <section className="py-20 md:py-32 reveal" style={{ background: "#0F0F0F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <span
              className="inline-block text-xs font-sans font-medium uppercase tracking-[0.15em] mb-4 px-3 py-1"
              style={{ background: "rgba(201,160,68,0.1)", color: "#C9A044", border: "1px solid rgba(201,160,68,0.25)", borderRadius: "4px" }}
            >
              Live Demo
            </span>
            <h2
              className="font-heading font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#FFFFFF" }}
            >
              See AI Automation
              <br />
              in Action
            </h2>
            <p className="mb-8 leading-relaxed font-sans" style={{ color: "#888888", fontSize: "18px" }}>
              This is what happens when a patient messages our client&apos;s
              clinic at 2&nbsp;AM. No human staff. Instant, personalised response.
              Appointment booked automatically.
            </p>
            <div
              className="inline-flex items-center gap-3 px-5 py-4"
              style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px" }}
            >
              <div className="pulse-dot" />
              <p className="font-sans" style={{ color: "#888888", fontSize: "14px" }}>
                <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Response time: 3 seconds.</span>
                {" "}Previously: 14 hours.
              </p>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center items-center">
            <div
              className="relative flex flex-col"
              style={{ width: "300px", height: "600px", background: "#0D0D0D", borderRadius: "40px", border: "3px solid #222222", boxShadow: "0 40px 80px rgba(0,0,0,0.6)", overflow: "hidden" }}
            >
              <div className="flex-shrink-0 flex items-center justify-center" style={{ height: "28px", background: "#0D0D0D", paddingTop: "6px" }}>
                <div style={{ width: "80px", height: "6px", background: "#1a1a1a", borderRadius: "3px" }} />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ background: "#128C7E" }}>
                <div className="flex items-center justify-center font-bold text-sm" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#075E54", color: "#fff" }}>H</div>
                <div>
                  <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, lineHeight: 1 }}>HSC Chiropractic</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px", marginTop: "2px" }}>AI Assistant • Online</p>
                </div>
              </div>
              <div
                className={`flex-1 flex flex-col gap-2 px-3 py-3 overflow-hidden ${fading ? "chat-fade-out" : ""}`}
                style={{ background: "#ECE5DD" }}
              >
                {MESSAGES.map((msg, i) => {
                  const isPatient = msg.from === "patient";
                  return (
                    <div key={msg.id} className={`chat-msg ${i < visibleCount ? "visible" : ""}`} style={{ display: "flex", justifyContent: isPatient ? "flex-end" : "flex-start" }}>
                      <div style={{ maxWidth: "80%", padding: "7px 10px", borderRadius: isPatient ? "12px 12px 0 12px" : "12px 12px 12px 0", background: isPatient ? "#DCF8C6" : "#fff", fontSize: "11px", color: "#111", lineHeight: 1.5, whiteSpace: "pre-line", boxShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
                        {msg.text}
                        <span style={{ display: "block", fontSize: "9px", color: "#999", textAlign: "right", marginTop: "2px" }}>{isPatient ? "✓✓" : ""}</span>
                      </div>
                    </div>
                  );
                })}
                <div className={`chat-typing ${showTyping && !fading ? "visible" : ""}`} style={{ display: "flex" }}>
                  <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "10px 12px", borderRadius: "12px 12px 12px 0", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
                    <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
