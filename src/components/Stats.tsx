import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

function useAnimatedCounter(targetValue: number, inView: boolean) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    return num >= 1000 ? num.toLocaleString() : num.toString();
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, targetValue, { duration: 1.8, ease: [0.25, 1, 0.5, 1] });
    return controls.stop;
  }, [count, targetValue, inView]);

  return { rounded };
}

function StatCard({ value, label }: { value: string; label: string }) {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9,]/g, '');
  const nodeRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-40px' });
  const { rounded } = useAnimatedCounter(numericPart, inView);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest + suffix;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return (
    <motion.div
      ref={containerRef}
      className="text-center px-2"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl sm:text-4xl font-bold mb-1 text-zinc-900">
        <span ref={nodeRef}>0{suffix}</span>
      </div>
      <div className="text-zinc-500 text-[13px] font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

const stats = [
  { value: "1200+", label: "Projects Completed" },
  { value: "98%", label: "First-Time Fix Rate" },
  { value: "1000+", label: "Happy Customers" },
  { value: "7+", label: "Day Service Guarantee" },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-white" id="stats-section">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:divide-x divide-zinc-200">
          <StatCard value={stats[0].value} label={stats[0].label} />
          <StatCard value={stats[1].value} label={stats[1].label} />
          <StatCard value={stats[2].value} label={stats[2].label} />
          <StatCard value={stats[3].value} label={stats[3].label} />
        </div>
      </div>
    </section>
  );
}
