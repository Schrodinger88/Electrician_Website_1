import { Phone, Shield, Clock, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-zinc-950 text-white pt-20 pb-32 relative overflow-hidden min-h-[100dvh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Shield weight="fill" className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-brand-400 font-medium tracking-tight">Licensed & Insured Electricians</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
              Professional Electrical<br />
              <span className="text-brand-400">Services You</span><br />
              Can Trust
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-[55ch]">
              Expert electrical solutions for residential and commercial properties. From panel upgrades to emergency repairs, we deliver safe, reliable service backed by certified professionals.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.a
                href="tel:+16133017913"
                className="flex items-center gap-3 bg-brand-500 text-zinc-950 px-8 py-5 rounded-2xl font-semibold hover:bg-brand-400 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] min-h-[60px] group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-zinc-950 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone weight="fill" className="w-6 h-6 text-brand-400" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-zinc-950/60 font-medium">Call Now</span>
                  <span className="text-lg font-bold tracking-tight">(613) 301-7913</span>
                </div>
              </motion.a>

              <Link
                to="/contact"
                className="flex items-center gap-2 text-white px-6 py-4 rounded-2xl font-medium hover:bg-zinc-800/50 transition-all duration-300 border border-zinc-800"
              >
                <span>Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-400">
                <Clock weight="fill" className="w-5 h-5 text-brand-400" />
                <span className="text-sm font-medium">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Shield weight="fill" className="w-5 h-5 text-brand-400" />
                <span className="text-sm font-medium">17+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative w-full hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=1000&fit=crop"
                alt="Certified electrician performing panel inspection"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Floating Stat Card */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white">4.9★</div>
                    <div className="text-sm text-white/70">73+ Reviews</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-brand-400">100%</div>
                    <div className="text-sm text-white/70">Licensed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-500/3 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
