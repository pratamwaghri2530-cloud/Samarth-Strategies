export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 reveal" style={{ background: "#0A0A0F" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-heading font-bold mb-4"
          style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#F0EEE9" }}
        >
          What Our Clients Say
        </h2>
        <p
          className="font-sans mb-16"
          style={{ color: "rgba(240,238,233,0.65)", fontSize: "18px" }}
        >
          One real review beats ten fake ones.
        </p>

        {/* Single testimonial card */}
        <div
          className="relative mx-auto rounded-2xl p-10 text-left"
          style={{
            background: "#13131A",
            borderLeft: "4px solid #F97316",
            maxWidth: "680px",
          }}
        >
          {/* Background quote mark */}
          <div
            className="absolute font-heading font-extrabold select-none pointer-events-none"
            style={{
              fontSize: "120px",
              color: "rgba(249,115,22,0.08)",
              top: "-10px",
              left: "16px",
              lineHeight: 1,
            }}
          >
            &ldquo;
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#F97316", fontSize: "18px" }}>★</span>
              ))}
            </div>

            <blockquote
              className="font-sans leading-relaxed mb-8 italic"
              style={{ fontSize: "18px", color: "rgba(240,238,233,0.85)" }}
            >
              &ldquo;Thank you for making this website — it really looks very nice. I appreciate your time and effort. 🙏&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="flex items-center justify-center font-heading font-bold text-lg rounded-full flex-shrink-0"
                style={{
                  width: "52px", height: "52px",
                  background: "rgba(249,115,22,0.15)",
                  color: "#F97316",
                }}
              >
                V
              </div>
              <div>
                <h4 className="font-heading font-bold" style={{ color: "#F0EEE9", fontSize: "16px" }}>
                  Vanessa da Silva
                </h4>
                <p className="font-sans text-sm" style={{ color: "rgba(240,238,233,0.45)" }}>
                  Ashtanga Yoga Teacher, Costa Rica
                </p>
              </div>
              <span
                className="ml-auto font-sans font-semibold text-xs tracking-wider px-3 py-1 rounded-full flex-shrink-0"
                style={{ background: "rgba(249,115,22,0.1)", color: "#F97316" }}
              >
                Website Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
