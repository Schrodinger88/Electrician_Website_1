import { Shield, Certificate, Star, Clock, Users, CheckCircle } from '@phosphor-icons/react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut"
    });

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
    { value: 4.9, suffix: '/5.0', label: 'Customer Rating' },
    { value: 100, suffix: '%', label: 'Licensed & Insured' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully certified electricians with comprehensive liability coverage'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for urgent electrical issues'
    },
    {
      icon: Certificate,
      title: 'Warranty Guaranteed',
      description: 'All work backed by our comprehensive workmanship warranty'
    },
    {
      icon: CheckCircle,
      title: 'Free Estimates',
      description: 'No-obligation quotes for all residential and commercial projects'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-emerald-600 font-semibold tracking-tight">Why Choose Us</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Trusted by Homeowners<br />
            <span className="text-emerald-500">& Businesses Alike</span>
          </motion.h2>

          <motion.p
            className="text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our commitment to safety, quality, and customer satisfaction has made us the go-to electrical service provider in the region.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-50 rounded-[2.5rem] p-8 border border-slate-200/50 text-center relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              {/* Shimmer Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ willChange: 'transform' }}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-sm text-zinc-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-[2.5rem] p-8 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500 rounded-[2.5rem]" />

                <div className="relative z-10">
                  {/* Animated Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      weight="duotone"
                      className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reviews Showcase */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating Particles */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Star weight="fill" className="w-8 h-8 text-white" />
                </motion.div>
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">4.9 out of 5.0 Stars</h3>
            <p className="text-white/80 text-lg mb-6">Based on 400+ verified customer reviews</p>
            <motion.button
              className="px-8 py-4 rounded-2xl bg-white text-emerald-600 font-semibold hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Read Customer Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
