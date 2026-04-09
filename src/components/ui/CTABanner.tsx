import { Phone } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Get Started?",
  subtitle = "Book a certified electrician today for fast, safe, and reliable service at your home or business."
}: CTABannerProps) {
  return (
    <section className="py-16 sm:py-20 bg-white" id="cta-section">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8">
        <motion.div
          className="bg-zinc-900 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">{title}</h2>
            <p className="text-zinc-400 text-base sm:text-[17px] mb-8 max-w-lg mx-auto leading-relaxed">{subtitle}</p>

            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
              <a
                href="tel:+16133017913"
                id="cta-call-btn"
                className="flex items-center justify-center gap-2.5 bg-brand-500 text-white px-6 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-brand-600 transition-colors duration-200"
              >
                <Phone weight="fill" className="w-4 h-4" />
                (613) 301-7913
              </a>
              <Link
                to="/contact"
                id="cta-estimate-btn"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-[15px] border border-white/15 text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                Get Free Estimate
                <span className="text-zinc-500">→</span>
              </Link>
            </div>
          </div>

          {/* Subtle ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-brand-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
