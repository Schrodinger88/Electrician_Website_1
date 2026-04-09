import { Phone, Shield, Clock, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-zinc-950 text-white pt-24 sm:pt-28 pb-20 sm:pb-28 relative overflow-hidden min-h-[100dvh] flex items-center" id="hero-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Shield weight="fill" className="w-3.5 h-3.5 text-brand-400" />
              <span className="text-[13px] text-zinc-300 font-medium">Licensed & Insured Electricians</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-bold tracking-[-0.035em] leading-[1.05]">
              Professional{' '}
              <br className="hidden sm:block" />
              Electrical{' '}
              <span className="text-brand-400">Services</span>{' '}
              <br className="hidden sm:block" />
              You Can Trust
            </h1>

            <p className="text-zinc-400 text-base sm:text-[17px] leading-relaxed max-w-[52ch]">
              Expert electrical solutions for residential and commercial properties. From panel upgrades to emergency repairs, we deliver safe, reliable service backed by certified professionals.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <motion.a
                href="tel:+16133017913"
                id="hero-call-btn"
                className="flex items-center justify-center gap-3 bg-brand-500 text-white px-7 py-4 rounded-xl font-semibold hover:bg-brand-600 transition-colors duration-200 group"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone weight="fill" className="w-5 h-5" />
                <span className="text-base">(613) 301-7913</span>
              </motion.a>

              <Link
                to="/contact"
                id="hero-estimate-btn"
                className="flex items-center justify-center gap-2 text-zinc-300 px-6 py-4 rounded-xl font-medium hover:text-white hover:bg-white/[0.06] transition-all duration-200 border border-white/[0.1]"
              >
                <span>Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-zinc-400">
                <Clock weight="fill" className="w-4 h-4 text-brand-400" />
                <span className="text-[13px] font-medium">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Shield weight="fill" className="w-4 h-4 text-brand-400" />
                <span className="text-[13px] font-medium">17+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative w-full hidden lg:block"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06] relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=1000&fit=crop"
                alt="Certified electrician performing panel inspection"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Floating Stat Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-black/40 rounded-xl p-5 border border-white/[0.08]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">4.9★</div>
                    <div className="text-[13px] text-white/60">73+ Reviews</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-400">100%</div>
                    <div className="text-[13px] text-white/60">Licensed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient Background — subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/[0.02] rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
