import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/ui/CTABanner';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { Shield, Certificate, Users, Clock, Trophy, Target } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import { ABOUT } from '../config/siteConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = { Shield, Certificate, Users, Clock, Trophy, Target };

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

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={ABOUT.hero.title}
        titleAccent={ABOUT.hero.titleAccent}
        subtitle={ABOUT.hero.subtitle}
        breadcrumb={ABOUT.hero.breadcrumb}
      />

      {/* Story Section — Sticky Image + Scrolling Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              className="lg:sticky lg:top-28 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src={ABOUT.story.image}
                  alt={ABOUT.story.imageAlt}
                  className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-5 left-5 right-5 backdrop-blur-xl bg-white/90 rounded-xl p-4 border border-zinc-200/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-zinc-900">{ABOUT.story.title}</div>
                      <div className="text-[13px] text-zinc-500 font-medium">{ABOUT.story.titleAccent}</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center">
                      <Trophy weight="fill" className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-10">
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1.5 rounded-full bg-brand-500/[0.08] border border-brand-500/[0.12]">
                  <span className="text-[13px] text-brand-600 font-semibold">{ABOUT.story.badge}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {ABOUT.story.title} <span className="text-brand-500">{ABOUT.story.titleAccent}</span>
                </h2>
                {ABOUT.story.paragraphs.map((p, i) => (
                  <p key={i} className="text-zinc-500 text-[15px] leading-relaxed">{p}</p>
                ))}
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {ABOUT.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-4 sm:p-5 bg-surface-50 rounded-xl border border-zinc-200/60 group hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[13px] text-zinc-500 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-zinc-950 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3">Our Mission</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">{ABOUT.mission}</p>
                </div>
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Core Values</h2>
            <p className="text-zinc-500 text-base max-w-xl mx-auto">The principles that guide every project we undertake.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ABOUT.values.map((value, index) => {
              const Icon = iconMap[value.iconName] || Shield;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-zinc-200/60 text-center group hover:border-zinc-300/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-500/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-500 transition-colors duration-250">
                    <Icon weight="duotone" className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors duration-250" />
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2 tracking-tight">{value.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Meet Our Team</h2>
            <p className="text-zinc-500 text-base max-w-xl mx-auto">Certified professionals dedicated to delivering excellence on every project.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {ABOUT.team.map((member, index) => (
              <motion.div key={index} className="group" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }}>
                <div className="rounded-xl overflow-hidden mb-4 aspect-[3/4] relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-black/30 rounded-lg p-2.5 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-[13px] font-medium">{member.experience} experience</span>
                  </div>
                </div>
                <h3 className="text-[15px] sm:text-[17px] font-semibold text-zinc-900">{member.name}</h3>
                <p className="text-brand-600 font-medium text-[13px]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-950 text-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Licenses & <span className="text-brand-400">Certifications</span></h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto mb-10">Fully licensed, bonded, and insured. Your safety and peace of mind come first.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {ABOUT.certifications.map((cert, index) => {
              const Icon = iconMap[cert.iconName] || Certificate;
              return (
                <motion.div key={index} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5 sm:p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }}>
                  <Icon weight="duotone" className="w-8 h-8 text-brand-400 mx-auto mb-3" />
                  <p className="text-[13px] font-medium text-zinc-300">{cert.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner title={ABOUT.cta.title} subtitle={ABOUT.cta.subtitle} />
    </>
  );
}
