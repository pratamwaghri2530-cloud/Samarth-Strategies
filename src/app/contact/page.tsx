import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Samarth Strategies",
  description:
    "Get in touch with Samarth Strategies for a free audit and consultation for your local business.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16 md:pt-48 md:pb-24 text-center"
        style={{ background: "#0A0A0F", borderBottom: "1px solid rgba(240,238,233,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "#F0EEE9", letterSpacing: "-0.02em" }}
          >
            Let&apos;s Talk{" "}
            <span style={{ color: "#F97316" }}>Growth</span>
          </h1>
          <p
            className="font-sans leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(240,238,233,0.65)" }}
          >
            Ready to get more customers online? We&apos;re here to help. Reach out for a free,
            no-obligation audit of your digital presence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#0A0A0F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div>
              <h2
                className="font-heading font-bold mb-8"
                style={{ fontSize: "28px", color: "#F97316" }}
              >
                Get in Touch
              </h2>

              <div className="space-y-8">
                {[
                  {
                    Icon: Phone,
                    title: "Phone",
                    main: "+91 8850840056",
                    sub: "Mon–Fri, 9am–6pm IST",
                    color: "#F97316",
                  },
                  {
                    Icon: Mail,
                    title: "Email",
                    main: "hello@samarthstrategies.com",
                    sub: "We reply within 24 hours",
                    color: "#6366F1",
                  },
                  {
                    Icon: MessageCircle,
                    title: "WhatsApp",
                    main: "+91 8850840056",
                    sub: "Click to chat instantly",
                    subHref: "https://wa.me/918850840056",
                    color: "#22c55e",
                  },
                  {
                    Icon: MapPin,
                    title: "Headquarters",
                    main: "Mumbai, Maharashtra, India",
                    sub: "Serving clients globally",
                    color: "#F97316",
                  },
                ].map(({ Icon, title, main, sub, subHref, color }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: "48px", height: "48px", background: `${color}18` }}
                    >
                      <Icon size={22} style={{ color }} />
                    </div>
                    <div>
                      <h3
                        className="font-heading font-bold mb-1"
                        style={{ fontSize: "16px", color: "#F0EEE9" }}
                      >
                        {title}
                      </h3>
                      <p className="font-sans mb-1" style={{ color: "rgba(240,238,233,0.65)", fontSize: "15px" }}>
                        {main}
                      </p>
                      {subHref ? (
                        <a
                          href={subHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm font-medium"
                          style={{ color: "#22c55e" }}
                        >
                          {sub}
                        </a>
                      ) : title === "Phone" ? (
                        <div className="flex items-center gap-2">
                          <span className="pulse-dot" />
                          <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "rgba(240,238,233,0.4)" }}>
                            {sub}
                          </p>
                        </div>
                      ) : (
                        <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "rgba(240,238,233,0.4)" }}>
                          {sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "#13131A", border: "1px solid rgba(240,238,233,0.08)" }}
            >
              <h2
                className="font-heading font-bold mb-6"
                style={{ fontSize: "22px", color: "#F0EEE9" }}
              >
                Send us a Message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-sm font-medium mb-2" style={{ color: "rgba(240,238,233,0.6)" }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      className="dark-input w-full px-4 py-3 rounded-lg font-sans text-sm"
                      placeholder="Rahul"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium mb-2" style={{ color: "rgba(240,238,233,0.6)" }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="dark-input w-full px-4 py-3 rounded-lg font-sans text-sm"
                      placeholder="Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium mb-2" style={{ color: "rgba(240,238,233,0.6)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="dark-input w-full px-4 py-3 rounded-lg font-sans text-sm"
                    placeholder="rahul@yourbusiness.com"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium mb-2" style={{ color: "rgba(240,238,233,0.6)" }}>
                    Business Type / Industry
                  </label>
                  <input
                    type="text"
                    className="dark-input w-full px-4 py-3 rounded-lg font-sans text-sm"
                    placeholder="e.g. Restaurant, Clinic, Retail"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium mb-2" style={{ color: "rgba(240,238,233,0.6)" }}>
                    How can we help you grow?
                  </label>
                  <textarea
                    rows={4}
                    className="dark-input w-full px-4 py-3 rounded-lg font-sans text-sm resize-none"
                    placeholder="Tell us about your current digital presence and your goals..."
                  />
                </div>

                <button
                  type="button"
                  className="btn-primary w-full py-4 rounded-lg font-sans font-medium tracking-[0.1em] uppercase text-sm"
                >
                  Submit Request
                </button>

                <p className="font-sans text-xs text-center" style={{ color: "rgba(240,238,233,0.3)" }}>
                  By submitting this form, you agree to our privacy policy. We protect your data and never spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
