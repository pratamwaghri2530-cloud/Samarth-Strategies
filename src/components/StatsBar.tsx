const stats = [
  { value: "3+",    label: "Businesses Helped" },
  { value: "100%",  label: "On-Time Delivery" },
  { value: "24/7",  label: "AI Automation" },
  { value: "3 sec", label: "Bot Response Time" },
];

export default function StatsBar() {
  return (
    <section className="py-20 reveal" style={{ background: "#13131A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="font-heading font-extrabold mb-3"
                style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "#F97316", lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <p
                className="font-sans font-medium text-sm tracking-[0.08em] uppercase"
                style={{ color: "rgba(240,238,233,0.55)" }}
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
