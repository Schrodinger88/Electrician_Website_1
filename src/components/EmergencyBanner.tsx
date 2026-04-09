import { Lightning, Phone, Clock, ShieldCheck } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function EmergencyBanner() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-900 relative overflow-hidden" id="emergency-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/15 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Lightning weight="fill" className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[13px] text-amber-400 font-medium">Emergency Service Available</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-[-0.03em] leading-[1.1] text-white mb-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              Electrical Emergency?<br />
              <span className="text-brand-400">We're Available 24/7</span>
            </motion.h2>

            <motion.p
              className="text-zinc-400 text-base sm:text-[17px] leading-relaxed mb-8 max-w-[52ch]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
            >
              Power outages, sparking outlets, or electrical failures don't wait for business hours. Neither do we. Our emergency response team is ready to help you day or night.
            </motion.p>

            <motion.a
              href="tel:+16133017913"
              id="emergency-call-btn"
              className="inline-flex items-center gap-3 bg-brand-500 text-white px-7 py-4 rounded-xl font-semibold hover:bg-brand-600 transition-colors duration-200 group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone weight="fill" className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <span className="text-[11px] text-white/60 font-medium leading-tight">Emergency Hotline</span>
                <span className="text-lg font-bold tracking-tight leading-tight">(613) 301-7913</span>
              </div>
            </motion.a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: Clock, label: '24/7 Availability', desc: 'Around the clock service' },
              { icon: Lightning, label: 'Fast Response', desc: 'Avg. 45min arrival time' },
              { icon: Phone, label: 'Direct Line', desc: 'Speak to a real electrician' },
              { icon: ShieldCheck, label: 'Fair Pricing', desc: 'No surprise emergency fees' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/[0.04] backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/[0.06] group hover:bg-white/[0.07] transition-colors duration-250"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-3"
                  >
                    <Icon weight="duotone" className="w-5 h-5 text-brand-400" />
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-0.5">{feature.label}</h3>
                  <p className="text-zinc-500 text-[13px]">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>
    </section>
  );
}
