import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0A1E] text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-white mb-4 flex items-center">
              <span className="text-accent mr-0.5">S</span>amarth<span className="ml-1 text-accent">S</span>trategies
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-xs">
              Helping local businesses compete online — everywhere.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automations" className="text-gray-400 hover:text-primary transition-colors">
                  AI Automations
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-gray-400 hover:text-primary transition-colors">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimization" className="text-gray-400 hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>hello@samarthstrategies.com</li>
              <li>+91 90000 00000</li>
              <li className="pt-2 text-sm text-gray-500 font-medium tracking-wide uppercase">
                Available IST & EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Samarth Strategies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
