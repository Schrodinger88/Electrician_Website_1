import { Phone, Shield, Clock, ArrowRight, Star } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND, HERO } from '../config/siteConfig';

export default function Hero() {
  return (
    <section className="bg-surface-950 text-white pt-32 sm:pt-40 pb-20 sm:pb-28 relative overflow-hidden min-h-[100dvh] flex items-center" id="hero-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-8 relative z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-glass backdrop-blur-md"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Shield weight="fill" className="w-4 h-4 text-brand-400 drop-shadow-[0_0_8px_rgba(76,185,122,0.8)]" />
              <span className="text-[12px] text-zinc-300 font-bold tracking-widest uppercase">{HERO.badge}</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-[68px] lg:text-[76px] font-bold tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
              {HERO.titleLine1} <br className="hidden sm:block" />
              {HERO.titleLine2} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 drop-shadow-sm">{HERO.titleAccent}</span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-[19px] leading-relaxed max-w-[48ch] font-light">
              {HERO.subtitle}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.a
                href={`tel:${BRAND.phoneRaw}`}
                id="hero-call-btn"
                className="relative flex items-center justify-center gap-3 bg-brand-500 text-white px-8 py-4.5 rounded-2xl font-semibold shadow-[0_0_40px_rgba(42,157,94,0.3)] hover:shadow-[0_0_60px_rgba(42,157,94,0.5)] transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity" />
                <Phone weight="fill" className="w-5 h-5 relative z-10 drop-shadow-md" />
                <span className="text-[17px] relative z-10 drop-shadow-sm">{BRAND.phone}</span>
              </motion.a>

              <Link
                to="/contact"
                id="hero-estimate-btn"
                className="flex items-center justify-center gap-3 text-zinc-300 px-8 py-4.5 rounded-2xl font-medium hover:text-white hover:bg-white/[0.05] transition-all duration-300 border border-white/[0.1] backdrop-blur-md shadow-glass group"
              >
                <span className="text-[17px]">Free Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-3 text-zinc-400 group cursor-default">
                <div className="p-2.5 rounded-xl bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors border border-white/[0.05]">
                  <Clock weight="duotone" className="w-5 h-5 text-brand-400" />
                </div>
                <span className="text-[14px] font-medium">{HERO.trustIndicators[0].label}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 group cursor-default">
                <div className="p-2.5 rounded-xl bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors border border-white/[0.05]">
                  <Shield weight="duotone" className="w-5 h-5 text-brand-400" />
                </div>
                <span className="text-[14px] font-medium">{HERO.trustIndicators[1].label}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Asymmetric Image / Bento */}
          <motion.div
            className="relative w-full hidden lg:block h-[640px] perspective-1000"
            initial={{ opacity: 0, rotateY: 10, scale: 0.95 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="absolute inset-x-8 top-0 bottom-12 rounded-[32px] overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu z-10">
              <img
                src={HERO.image}
                alt={HERO.imageAlt}
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms] ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/20 to-transparent" />
            </div>

            {/* Floating Glass Bento Card */}
            <motion.div
              className="absolute bottom-4 -left-6 backdrop-blur-2xl bg-surface-900/60 rounded-2xl p-6 border border-white/[0.1] shadow-glass shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 w-[280px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex gap-1 text-brand-400 mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} weight="fill" className="w-4 h-4 drop-shadow-[0_0_5px_rgba(76,185,122,0.5)]" />)}
              </div>
              <div className="text-3xl font-bold text-white mb-0.5 tracking-tight">{HERO.reviewCard.rating}</div>
              <div className="text-[14px] text-zinc-400 font-medium">Over {HERO.reviewCard.reviewCount} {HERO.reviewCard.label}</div>
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-surface-900 shadow-md"></div>
                  <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-surface-900 shadow-md"></div>
                  <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-surface-900 shadow-md"></div>
                </div>
                <div className="text-xs text-zinc-300 font-medium">{HERO.reviewCard.communityLabel}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient Deep Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -left-[15%] w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </section>
  );
}
