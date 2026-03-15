import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "About Us | Samarth Strategies",
  description: "Learn about the team helping Indian offline businesses succeed in the digital world.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-light pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            About <span className="text-primary">Samarth Strategies</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to put offline businesses on the digital map, empowering local owners with the tools to compete and win.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Samarth Strategies was founded with a single, clear goal: to bridge the gap between traditional offline businesses and the vast opportunities of the digital world.
                </p>
                <p>
                  We saw too many amazing local businesses—restaurants, clinics, salons, and retail shops—struggle to find customers simply because they lacked an online presence or were wasting money on ineffective marketing.
                </p>
                <p>
                  We don't use jargon. We don't sell bloated packages. We deliver clear, measurable results through targeted web development, smart SEO, highly-optimized ads, and cutting-edge AI automations.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-video lg:aspect-square flex items-center justify-center border border-gray-200">
               {/* Placeholder for Team Image */}
               <span className="text-gray-400 font-medium font-heading tracking-wide uppercase">Team/Office Photo Here</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">Results First</h3>
                  <p className="text-gray-600">We don't care about vanity metrics. We care about calls, bookings, and revenue for your business.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">Transparency</h3>
                  <p className="text-gray-600">No hidden fees or confusing reports. You'll always know exactly where your investment is going.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">Local Focus</h3>
                  <p className="text-gray-600">We understand the unique challenges and opportunities of local Indian markets and businesses.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
