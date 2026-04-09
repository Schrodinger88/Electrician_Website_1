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
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-[2.5rem] p-10 sm:p-16 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+16133017913"
                className="flex items-center gap-3 bg-white text-brand-600 px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Phone weight="fill" className="w-5 h-5" />
                (613) 301-7913
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Get Free Estimate
                <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
