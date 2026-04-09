import { Lightning, Phone, Clock } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function EmergencyBanner() {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(239, 68, 68, 0)',
                  '0 0 0 10px rgba(239, 68, 68, 0.1)',
                  '0 0 0 0 rgba(239, 68, 68, 0)',
                ],
              }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Lightning weight="fill" className="w-4 h-4 text-accent-400" />
              </motion.div>
              <span className="text-sm text-accent-400 font-semibold tracking-tight">Emergency Service Available</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Electrical Emergency?<br />
              <span className="text-brand-400">We're Available 24/7</span>
            </motion.h2>

            <motion.p
              className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-[55ch]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Power outages, sparking outlets, or electrical failures don't wait for business hours. Neither do we. Our emergency response team is ready to help you day or night.
            </motion.p>

            <motion.a
              href="tel:+16133017913"
              className="inline-flex items-center gap-4 bg-accent-500 text-white px-10 py-6 rounded-2xl font-bold hover:bg-accent-600 transition-all duration-300 shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Phone weight="fill" className="w-6 h-6 text-accent-500" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/80 font-medium">Emergency Hotline</span>
                <span className="text-2xl font-bold tracking-tight">(613) 301-7913</span>
              </div>
            </motion.a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Clock, label: '24/7 Availability', desc: 'Around the clock service' },
              { icon: Lightning, label: 'Fast Response', desc: 'Avg. 45min arrival time' },
              { icon: Phone, label: 'Direct Line', desc: 'Speak to a real electrician' },
              { icon: Lightning, label: 'No Extra Fees', desc: 'Fair emergency pricing' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-6 border border-zinc-700/50 relative overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4"
                  >
                    <Icon weight="duotone" className="w-6 h-6 text-brand-400" />
                  </motion.div>
                  <h3 className="text-white font-bold text-lg mb-1">{feature.label}</h3>
                  <p className="text-zinc-400 text-sm">{feature.desc}</p>

                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-brand-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
    </section>
  );
}
