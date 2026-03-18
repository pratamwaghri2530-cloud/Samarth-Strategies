export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 reveal" style={{ background: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-heading font-bold mb-4"
          style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#FFFFFF" }}
        >
          What Our Clients Say
        </h2>
        <p className="font-sans mb-16" style={{ color: "#888888", fontSize: "18px" }}>
          One real review beats ten fake ones.
        </p>

        <div
          className="relative mx-auto text-left"
          style={{
            background: "#141414",
            border: "1px solid #222222",
            borderLeft: "3px solid #C9A044",
            borderRadius: "4px",
            padding: "48px",
            maxWidth: "680px",
          }}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#C9A044", fontSize: "18px" }}>★</span>
            ))}
          </div>

          <blockquote
            className="font-sans leading-relaxed mb-8"
            style={{ fontSize: "20px", color: "#FFFFFF", fontStyle: "italic" }}
          >
            &ldquo;Thank you for making this website — it really looks very nice.
            I appreciate your time and effort. 🙏&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center font-heading font-bold rounded-sm flex-shrink-0"
              style={{ width: "48px", height: "48px", background: "#C9A044", color: "#000000", fontSize: "16px" }}
            >
              V
            </div>
            <div>
              <h4 className="font-heading font-bold" style={{ color: "#FFFFFF", fontSize: "16px" }}>
                Vanessa da Silva
              </h4>
              <p className="font-sans text-sm" style={{ color: "#555555" }}>
                Ashtanga Yoga Teacher · Costa Rica
              </p>
            </div>
            <span
              className="ml-auto font-sans font-medium text-xs tracking-wider px-3 py-1 flex-shrink-0"
              style={{
                background: "rgba(201,160,68,0.1)",
                color: "#C9A044",
                border: "1px solid rgba(201,160,68,0.25)",
                borderRadius: "4px",
              }}
            >
              Website Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
