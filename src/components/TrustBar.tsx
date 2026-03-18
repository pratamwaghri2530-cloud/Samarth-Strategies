"use client";

const clients = [
  "Vanessa da Silva — Yoga Studio, Costa Rica",
  "Fluteon — Women's Fashion, Mumbai",
  "VM Service Centre — Mumbai",
  "HSC Chiropractic — Kharghar, Navi Mumbai",
  "The Flow Yoga — Kharghar, Navi Mumbai",
];

function MarqueeRow() {
  return (
    <span className="font-sans" style={{ whiteSpace: "nowrap" }}>
      {clients.map((client, i) => (
        <span key={i}>
          <span style={{ color: "#444444", fontSize: "12px", letterSpacing: "0.1em" }}>{client}</span>
          <span style={{ color: "#2A2A2A", margin: "0 24px" }}>·</span>
        </span>
      ))}
    </span>
  );
}

export default function TrustBar() {
  return (
    <div
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E", padding: "18px 0", overflow: "hidden", display: "flex", alignItems: "center" }}
    >
      <div
        className="font-sans"
        style={{ flexShrink: 0, padding: "0 28px 0 32px", color: "#333333", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap", borderRight: "1px solid #1E1E1E", marginRight: "32px" }}
      >
        TRUSTED BY
      </div>
      <div style={{ overflow: "hidden", flex: 1 }}>
        <div className="marquee-track">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </div>
  );
}
