import { Shield, Certificate, Clock, CheckCircle, Star } from '@phosphor-icons/react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest + suffix;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function TrustSignals() {
  const stats = [
    { value: 1247, suffix: '+', label: 'Projects Completed' },
    { value: 17, suffix: '+', label: 'Years Experience' },
    { value: 4.9, suffix: '/5', label: 'Customer Rating' },
    { value: 100, suffix: '%', label: 'Licensed & Insured' }
  ];

  const features = [
    { icon: Shield, title: 'Licensed & Insured', description: 'Fully certified electricians with comprehensive liability coverage' },
    { icon: Clock, title: '24/7 Emergency Service', description: 'Round-the-clock availability for urgent electrical issues' },
    { icon: Certificate, title: 'Warranty Guaranteed', description: 'All work backed by our comprehensive workmanship warranty' },
    { icon: CheckCircle, title: 'Free Estimates', description: 'No-obligation quotes for all residential and commercial projects' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Trusted by Homeowners"
          titleAccent="& Businesses Alike"
          subtitle="Our commitment to safety, quality, and customer satisfaction has made us the go-to electrical service provider in the region."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-50 rounded-[2rem] p-8 border border-slate-200/50 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-zinc-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-[2rem] p-8 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-brand-500/10 transition-all duration-500 rounded-[2rem]" />

                <motion.div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-all duration-300">
                  <Icon weight="duotone" className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>

                <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Reviews Banner */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-brand-500 to-brand-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} weight="fill" className="w-7 h-7 text-white" />
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">4.9 out of 5.0 Stars</h3>
            <p className="text-white/80 text-lg mb-6">Based on 400+ verified customer reviews</p>
            <Link
              to="/reviews"
              className="inline-block px-8 py-4 rounded-2xl bg-white text-brand-600 font-semibold hover:bg-white/90 transition-all duration-300"
            >
              Read Customer Reviews
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
