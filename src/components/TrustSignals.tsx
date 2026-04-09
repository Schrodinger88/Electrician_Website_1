import { Shield, Certificate, Clock, CheckCircle, Star } from '@phosphor-icons/react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';
import { TRUST_SIGNALS } from '../config/siteConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = { Shield, Clock, Certificate, CheckCircle };

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.8, ease: [0.25, 1, 0.5, 1] });
    return controls.stop;
  }, [count, value, inView]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest + suffix;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return <div ref={containerRef}><span ref={nodeRef}>0{suffix}</span></div>;
}

export default function TrustSignals() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="trust-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <SectionHeader
          badge={TRUST_SIGNALS.badge}
          title={TRUST_SIGNALS.title}
          titleAccent={TRUST_SIGNALS.titleAccent}
          subtitle={TRUST_SIGNALS.subtitle}
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20">
          {TRUST_SIGNALS.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-surface-50 rounded-xl p-6 sm:p-7 border border-zinc-200/60 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-1.5">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[13px] text-zinc-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRUST_SIGNALS.features.map((feature, index) => {
            const Icon = iconMap[feature.iconName] || Shield;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-7 border border-zinc-200/60 hover:border-zinc-300/80 transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-11 h-11 rounded-lg bg-brand-500/[0.08] flex items-center justify-center mb-5 group-hover:bg-brand-500 transition-colors duration-250">
                  <Icon weight="duotone" className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors duration-250" />
                </div>

                <h3 className="text-[17px] font-semibold text-zinc-900 mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Reviews Banner */}
        <motion.div
          className="mt-16 sm:mt-20 bg-brand-500 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} weight="fill" className="w-5 h-5 text-white/90" />
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1.5">{TRUST_SIGNALS.reviewBanner.rating}</h3>
            <p className="text-white/70 text-base mb-6">{TRUST_SIGNALS.reviewBanner.subtitle}</p>
            <Link
              to="/reviews"
              id="trust-reviews-btn"
              className="inline-block px-6 py-3 rounded-lg bg-white text-brand-600 font-semibold text-[14px] hover:bg-white/90 transition-colors duration-200"
            >
              {TRUST_SIGNALS.reviewBanner.buttonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
