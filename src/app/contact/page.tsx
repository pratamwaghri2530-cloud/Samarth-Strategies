import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Samarth Strategies",
  description: "Get in touch with Samarth Strategies for a free audit and consultation for your local business.",
};

export default function ContactPage() {
  return (
    <>
      <section
        className="pt-36 pb-16 md:pt-48 md:pb-24 text-center"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-heading font-extrabold mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            Let&apos;s Talk Growth
          </h1>
          <p className="font-sans leading-relaxed max-w-3xl mx-auto" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888888" }}>
            Ready to get more customers online? We&apos;re here to help. Reach out for a free,
            no-obligation audit of your digital presence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info */}
            <div>
              <h2 className="font-heading font-bold mb-8" style={{ fontSize: "28px", color: "#FFFFFF" }}>
                Get in Touch
              </h2>
              <div className="space-y-8">
                {[
                  { Icon: Phone,         title: "Phone",        main: "+91 8850840056",              sub: "Mon–Fri, 9am–6pm IST",    color: "#C9A044",  subHref: undefined },
                  { Icon: Mail,          title: "Email",        main: "hello@samarthstrategies.com", sub: "We reply within 24 hours", color: "#FFFFFF",  subHref: undefined },
                  { Icon: MessageCircle, title: "WhatsApp",     main: "+91 8850840056",              sub: "Click to chat instantly",  color: "#22c55e", subHref: "https://wa.me/918850840056" },
                  { Icon: MapPin,        title: "Headquarters", main: "Mumbai, Maharashtra, India",  sub: "Serving clients globally", color: "#C9A044",  subHref: undefined },
                ].map(({ Icon, title, main, sub, color, subHref }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{ width: "48px", height: "48px", background: "#141414", border: "1px solid #222222", borderRadius: "4px" }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-1" style={{ fontSize: "15px", color: "#FFFFFF" }}>{title}</h3>
                      <p className="font-sans mb-1" style={{ color: "#888888", fontSize: "15px" }}>{main}</p>
                      {subHref ? (
                        <a href={subHref} target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-medium" style={{ color: "#22c55e" }}>{sub}</a>
                      ) : title === "Phone" ? (
                        <div className="flex items-center gap-2">
                          <span className="pulse-dot" />
                          <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "#555555" }}>{sub}</p>
                        </div>
                      ) : (
                        <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "#555555" }}>{sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px", padding: "32px" }}>
              <h2 className="font-heading font-bold mb-6" style={{ fontSize: "22px", color: "#FFFFFF" }}>
                Send us a Message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-sm mb-2" style={{ color: "#555555" }}>First Name</label>
                    <input type="text" className="dark-input w-full px-4 py-3 font-sans text-sm" style={{ borderRadius: "4px" }} placeholder="Rahul" />
                  </div>
                  <div>
                    <label className="block font-sans text-sm mb-2" style={{ color: "#555555" }}>Last Name</label>
                    <input type="text" className="dark-input w-full px-4 py-3 font-sans text-sm" style={{ borderRadius: "4px" }} placeholder="Sharma" />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-sm mb-2" style={{ color: "#555555" }}>Email Address</label>
                  <input type="email" className="dark-input w-full px-4 py-3 font-sans text-sm" style={{ borderRadius: "4px" }} placeholder="rahul@yourbusiness.com" />
                </div>
                <div>
                  <label className="block font-sans text-sm mb-2" style={{ color: "#555555" }}>Business Type / Industry</label>
                  <input type="text" className="dark-input w-full px-4 py-3 font-sans text-sm" style={{ borderRadius: "4px" }} placeholder="e.g. Restaurant, Clinic, Retail" />
                </div>
                <div>
                  <label className="block font-sans text-sm mb-2" style={{ color: "#555555" }}>How can we help you grow?</label>
                  <textarea rows={4} className="dark-input w-full px-4 py-3 font-sans text-sm resize-none" style={{ borderRadius: "4px" }} placeholder="Tell us about your current digital presence and your goals..." />
                </div>
                <button type="button" className="btn-primary w-full py-4 font-sans font-medium tracking-[0.08em] uppercase text-sm" style={{ borderRadius: "4px" }}>
                  Submit Request
                </button>
                <p className="font-sans text-xs text-center" style={{ color: "#444444" }}>
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
