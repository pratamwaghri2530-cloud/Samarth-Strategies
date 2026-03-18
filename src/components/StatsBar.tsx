const stats = [
  { value: "3+",    label: "Businesses Helped" },
  { value: "100%",  label: "On-Time Delivery"  },
  { value: "24/7",  label: "AI Automation"     },
  { value: "3 sec", label: "Bot Response Time" },
];

export default function StatsBar() {
  return (
    <section className="py-20 reveal" style={{ background: "#0F0F0F", borderTop: "1px solid #1E1E1E", borderBottom: "1px solid #1E1E1E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="font-heading font-extrabold mb-3"
                style={{ fontSize: "clamp(48px, 7vw, 80px)", color: "#FFFFFF", lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <p
                className="font-sans font-medium text-xs tracking-[0.12em] uppercase"
                style={{ color: "#555555" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
