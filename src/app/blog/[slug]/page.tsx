import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/918850840056?text=Hi%20Samarth%20Strategies!%20I%20would%20like%20to%20book%20a%20free%20consultation.";

const articles: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "why-your-clinic-loses-patients-after-7pm": {
    title: "Why Your Clinic Is Losing Patients After 7 PM",
    category: "AI AUTOMATION",
    date: "March 15, 2026",
    readTime: "5 min read",
    content: [
      "Every evening, patients in pain pick up their phones and search for help. They find your clinic. They send a WhatsApp message. And then they wait.",
      "By the time your receptionist replies the next morning, that patient has already booked with the clinic down the road that responded in 3 minutes.",
      "This is the hidden leak in every clinic's business — and most doctors have no idea it's happening.",
      "We discovered this firsthand when a patient's family messaged HSC Chiropractic in Kharghar at 7:49 PM about a neck pain emergency. The reply came at 9:48 AM the next morning — 14 hours later.",
      "By then, the patient had already found another clinic.",
      "The fix is not hiring a night receptionist. The fix is AI automation.",
      "We built HSC Chiropractic a WhatsApp bot that:\n- Responds to every enquiry instantly, 24/7\n- Collects patient details automatically\n- Explains the treatment process and pricing\n- Requests a ₹500 advance to confirm the slot\n- Sends the clinic address and directions",
      "The entire onboarding flow — from first message to confirmed appointment — happens without any human involvement. In under 5 minutes.",
      "Response time dropped from 14 hours to 3 seconds.",
      "If your clinic gets even 3 extra patients per week from faster responses, the automation pays for itself in the first month.",
      "The question is not whether you can afford AI automation. The question is how many patients you can afford to lose.",
    ],
  },
  "website-that-pays-for-itself": {
    title: "The ₹12,000 Website That Pays for Itself in a Week",
    category: "WEB DEVELOPMENT",
    date: "March 8, 2026",
    readTime: "4 min read",
    content: [
      "Neha runs The Flow — a yoga studio in Sector 7, Kharghar. 5.0 stars on Google. 78 reviews. Every single one praising her personal attention.",
      "No website. Zero online presence.",
      "When we visited her studio, she was mid-class and had to physically stop teaching to speak with us. A new student had walked in for enquiries. She had to choose between her current students and a potential new one.",
      "This is what running a business without digital infrastructure looks like in 2026.",
      "The problem was not Neha's teaching. The problem was her digital absence.",
      "When someone in Kharghar searches 'yoga classes near me' on Google — Neha does not appear. That student finds someone else.",
      "A ₹12,000 website changes this completely:\n- Neha appears in Google searches 24/7\n- Students can see her class schedule and pricing\n- New students fill an enquiry form without interrupting her classes\n- Her 5-star reviews are showcased prominently\n- A WhatsApp button connects interested students directly",
      "The first new student who finds her through Google and books a monthly batch at ₹3,000 pays for the entire website.",
      "That can happen in week one.",
      "We have seen it happen for every local wellness business we have worked with — from yoga studios in Kharghar to spa owners in Massachusetts.",
      "Your expertise deserves to be found. A website is not an expense. It is infrastructure.",
    ],
  },
  "whatsapp-bot-chiropractic-clinic": {
    title: "How We Built a WhatsApp Bot in One Night for a Chiropractic Clinic",
    category: "WHATSAPP AUTOMATION",
    date: "February 28, 2026",
    readTime: "6 min read",
    content: [
      "It was 1 AM on a Tuesday.",
      "We had just spent 8 days visiting HSC Chiropractic with a family member who needed treatment for neck pain. During those visits, we watched Radnyee — the clinic's assistant manager — manually copy and paste the same 8 WhatsApp messages to every new patient, every single day.",
      "The welcome note. The policy message. The intake form. The process explanation. The pricing. The UPI payment instructions. The appointment confirmation. The clinic directions.",
      "Eight messages. Every patient. Every time. Manually.",
      "We went home, pulled up our laptops, and built the bot.",
      "By 3 AM it was working. By morning, it was live.",
      "Here is exactly what the bot does:\n1. When a patient sends any first message — instant welcome and clinic policy\n2. Asks for patient details (name, age, address, reference) — automatically\n3. Explains the treatment process and pricing\n4. Shows available appointment slots\n5. Sends UPI payment link for ₹500 advance\n6. Confirms the appointment with address, Google Maps link, and arrival instructions",
      "The entire flow — from first message to confirmed booking — in under 5 minutes. Without Radnyee typing a single word.",
      "We used Node.js, Express, and the Twilio WhatsApp API. Total build time: 4 hours. Response time improvement: from 14 hours to 3 seconds.",
      "Every clinic, salon, and service business in India is doing this manually right now. They don't have to.",
    ],
  },
  "google-business-profile-mistakes": {
    title: "5 Reasons Your Google Business Profile is Costing You Customers",
    category: "DIGITAL STRATEGY",
    date: "February 20, 2026",
    readTime: "7 min read",
    content: [
      "87% of customers search online before visiting a local business. That number is not from a marketing textbook — it is from Google's own research.",
      "If someone searches for your service right now, what do they find?",
      "Here are the 5 most common mistakes we see on Google Business Profiles across Navi Mumbai, Mumbai, and Pune:",
      "1. Wrong or missing business hours\nA patient searches at 7 PM to see if you are open. Your profile says 'Hours not available.' They move on to the next result.",
      "2. Zero photos\nGoogle confirms that businesses with photos receive 42% more requests for directions. If your profile has no photos, you are invisible.",
      "3. No response to reviews\nReplying to reviews — positive and negative — signals to Google that your business is active. Inactive profiles rank lower. Always respond.",
      "4. Wrong category\nIf you are a chiropractic clinic listed as a 'Health & Wellness' general category instead of 'Chiropractor' — you are losing all category-specific searches.",
      "5. No posts for 90+ days\nGoogle rewards active profiles. Post once a week — an offer, a patient tip, a service update. It takes 10 minutes and directly impacts your ranking.",
      "Fixing all 5 of these takes less than 30 minutes.",
      "We do this as part of every client engagement. For most local businesses, just fixing the profile leads to a noticeable increase in calls within 4 to 6 weeks.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return { title: `${article.title} | Samarth Strategies`, description: article.content[0] };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <section
        className="pt-36 pb-12 md:pt-48 md:pb-16"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="font-sans font-medium text-xs tracking-wider px-3 py-1"
              style={{ background: "rgba(201,160,68,0.1)", color: "#C9A044", border: "1px solid rgba(201,160,68,0.25)", borderRadius: "2px" }}
            >
              {article.category}
            </span>
            <span className="font-sans text-sm" style={{ color: "#555555" }}>
              {article.date} · {article.readTime}
            </span>
          </div>
          <h1
            className="font-heading font-extrabold leading-tight"
            style={{ fontSize: "clamp(28px, 5vw, 52px)", color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            {article.title}
          </h1>
        </div>
      </section>

      <section className="py-16" style={{ background: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {article.content.map((para, i) => (
              <p
                key={i}
                className="font-sans leading-relaxed whitespace-pre-line"
                style={{ fontSize: "17px", color: "#888888" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-8 text-center"
            style={{ background: "#141414", border: "1px solid #222222", borderRadius: "4px" }}
          >
            <p className="font-heading font-bold mb-3" style={{ fontSize: "22px", color: "#FFFFFF" }}>
              Want this for your business?
            </p>
            <p className="font-sans mb-6" style={{ color: "#888888", fontSize: "15px" }}>
              Chat with us on WhatsApp — we respond instantly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-sans font-medium tracking-[0.08em] uppercase text-sm"
              style={{ borderRadius: "4px" }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog" className="font-sans text-sm transition-colors" style={{ color: "#555555" }}>
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
