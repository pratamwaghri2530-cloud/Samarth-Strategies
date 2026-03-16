"use client";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Restaurant Owner",
    location: "Mumbai",
    content: "Samarth Strategies got us ranking on Google Maps within 6 weeks. Our walk-ins doubled.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Salon Owner",
    location: "Pune",
    content: "We were fully booked 3 weeks in advance after they ran our Google Ads. Best investment we made.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Clinic Owner",
    location: "Austin TX",
    content: "Professional team, clear communication, and real results. Our website traffic tripled in 3 months.",
    rating: 5,
  },
];

// Duplicate for infinite scroll
const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 reveal overflow-hidden" style={{ background: "#0A0A0F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center">
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "#F0EEE9" }}
          >
            What Our Clients Say
          </h2>
          <p className="font-sans max-w-2xl mx-auto" style={{ color: "rgba(240,238,233,0.65)", fontSize: "18px" }}>
            Don&apos;t just take our word for it. Here&apos;s what business owners say about working with us.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-wrapper" style={{ overflow: "hidden" }}>
        <div className="carousel-track" style={{ gap: "24px", padding: "12px 12px" }}>
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative"
              style={{
                width: "380px",
                background: "#13131A",
                borderLeft: "4px solid #F97316",
                borderRadius: "12px",
                padding: "32px",
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
                  zIndex: 0,
                }}
              >
                &ldquo;
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <span key={si} style={{ color: "#F97316", fontSize: "16px" }}>★</span>
                  ))}
                </div>

                <blockquote
                  className="font-sans leading-relaxed mb-8 italic"
                  style={{ fontSize: "16px", color: "rgba(240,238,233,0.75)" }}
                >
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="flex items-center justify-center font-heading font-bold text-lg rounded-full flex-shrink-0"
                    style={{
                      width: "44px", height: "44px",
                      background: "rgba(249,115,22,0.15)",
                      color: "#F97316",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold" style={{ color: "#F0EEE9", fontSize: "15px" }}>
                      {t.name}
                    </h4>
                    <p className="font-sans text-xs" style={{ color: "rgba(240,238,233,0.45)" }}>
                      {t.role}, {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
