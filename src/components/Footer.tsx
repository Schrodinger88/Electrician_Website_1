import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A1A0A] text-white pt-16 sm:pt-20 pb-8 relative overflow-hidden" role="contentinfo">
      {/* Background gradient overlay to match the design's brown-ish dark footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-[#3b2006] pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-lg p-1 -m-1 w-fit" aria-label="Electrician Home">
              <div className="bg-amber-500 p-2 rounded-full">
                <Zap className="w-5 h-5 text-zinc-950" fill="currentColor" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold">Electrician</span>
            </a>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xs mb-8 leading-relaxed">
              Fast, safe, and professional electrical repair and installation for homes and offices.
            </p>
            <div className="flex gap-3 sm:gap-4" role="list" aria-label="Social media links">
              <a href="#" className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950" aria-label="Follow us on Twitter">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950" aria-label="Follow us on Instagram">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950" aria-label="Follow us on LinkedIn">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">How We Work</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Information</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>Phone: 01XXX-XXXXXX</li>
              <li>WhatsApp: 01XXX-XXXXXX</li>
              <li>Email: support@yourmail.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Service Hours</h4>
            <ul className="space-y-4 text-zinc-400 text-sm mb-8">
              <li>Saturday–Thursday: 9 AM – 10 PM</li>
              <li>Friday: Emergency Service Only</li>
            </ul>
            
            <h4 className="font-bold text-lg mb-4">Subscribe to our Newsletter</h4>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your Email"
                className="bg-zinc-800/50 border border-zinc-700 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 text-sm min-h-[44px]"
                aria-label="Email address for newsletter subscription"
                required
              />
              <button
                type="submit"
                className="bg-white text-zinc-950 px-5 py-3 rounded-r-lg font-medium text-sm hover:bg-amber-500 active:bg-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950 min-h-[44px]"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>© 2025 Electrical Service. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
