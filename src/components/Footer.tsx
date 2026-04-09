import { Link } from 'react-router-dom';
import { Lightning, Phone, Envelope, MapPin } from '@phosphor-icons/react';
import { BRAND, NAV_LINKS, FOOTER } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 sm:pt-20 pb-8 relative overflow-hidden" role="contentinfo" id="footer">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="bg-brand-500 p-2 rounded-lg">
                <Lightning weight="fill" className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold leading-tight">{BRAND.name}</span>
                <span className="text-[10px] text-zinc-500 tracking-wide uppercase font-medium">{BRAND.tagline}</span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs mb-5 leading-relaxed">
              {BRAND.description}
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-zinc-400">
              <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-2 hover:text-brand-400 transition-colors" id="footer-phone">
                <Phone weight="fill" className="w-4 h-4 text-brand-500" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-brand-400 transition-colors" id="footer-email">
                <Envelope weight="fill" className="w-4 h-4 text-brand-500" />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin weight="fill" className="w-4 h-4 text-brand-500" />
                {BRAND.address}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-zinc-400 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-zinc-200 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Our Services</h4>
            <ul className="space-y-2.5 text-zinc-400 text-sm">
              {FOOTER.servicesList.map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-zinc-200 transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Info */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Service Hours</h4>
            <ul className="space-y-2.5 text-zinc-400 text-sm mb-6">
              {FOOTER.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className="text-zinc-200 font-medium">{h.time}</span>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.06]">
                <span className="text-brand-400 text-[13px] font-medium">{FOOTER.emergencyNote}</span>
              </li>
            </ul>

            <h4 className="font-semibold text-[15px] mb-3">Resources</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><Link to="/faq" className="hover:text-zinc-200 transition-colors">FAQ</Link></li>
              <li><Link to="/service-area" className="hover:text-zinc-200 transition-colors">Service Area</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-zinc-500 text-[13px]">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
