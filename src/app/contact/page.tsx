import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Samarth Strategies",
  description: "Get in touch with Samarth Strategies for a free audit and consultation for your local business.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-light pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Let's Talk <span className="text-primary">Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to get more customers online? We're here to help. Reach out to us today for a free, no-obligation audit of your digital presence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">+91 90000 00000</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Mon-Fri, 9am - 6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">hello@samarthstrategies.com</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] shrink-0 mr-4">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-1">+91 90000 00000</p>
                    <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-[#25D366] font-semibold hover:underline">Click to chat instantly</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground mb-1">Headquarters</h3>
                    <p className="text-gray-600 mb-1">Mumbai, Maharashtra, India</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">Business Type / Industry</label>
                  <input type="text" id="business" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. Restaurant, Clinic, Retail" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help you grow?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Tell us about your current digital presence and your goals..."></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-primary hover:bg-indigo-700 text-white rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg">
                  Submit Request
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
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
