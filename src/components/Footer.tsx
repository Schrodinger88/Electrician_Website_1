import { Link } from 'react-router-dom';
import { Lightning, Phone, Envelope, MapPin } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-8 relative overflow-hidden" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2.5 rounded-xl">
                <Lightning weight="fill" className="w-5 h-5 text-zinc-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">ProElectric</span>
                <span className="text-[11px] text-zinc-500">Licensed & Insured</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm max-w-xs mb-6 leading-relaxed">
              Professional electrical services for residential and commercial properties. Licensed, insured, and trusted by thousands.
            </p>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <a href="tel:+16133017913" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Phone weight="fill" className="w-4 h-4 text-brand-500" />
                (613) 301-7913
              </a>
              <a href="mailto:info@proelectric.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Envelope weight="fill" className="w-4 h-4 text-brand-500" />
                info@proelectric.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin weight="fill" className="w-4 h-4 text-brand-500" />
                Ottawa, ON, Canada
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              {[
                'Residential Electrical',
                'Commercial Services',
                'Panel Upgrades',
                'Lighting Installation',
                'EV Charger Installation',
                'Emergency Repairs',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-brand-400 transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Service Hours</h4>
            <ul className="space-y-3 text-zinc-400 text-sm mb-8">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">7 AM - 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">8 AM - 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">Emergency Only</span>
              </li>
              <li className="pt-2 border-t border-zinc-800">
                <span className="text-brand-400 font-medium">24/7 Emergency Service Available</span>
              </li>
            </ul>

            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">FAQ</Link></li>
              <li><Link to="/service-area" className="hover:text-brand-400 transition-colors">Service Area</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ProElectric. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
