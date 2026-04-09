import { motion } from 'motion/react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ badge, title, titleAccent, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        className={`inline-block px-4 py-2 rounded-full mb-6 ${
          light
            ? 'bg-white/10 border border-white/20'
            : 'bg-brand-500/10 border border-brand-500/20'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={`text-sm font-semibold tracking-tight ${light ? 'text-brand-300' : 'text-brand-600'}`}>
          {badge}
        </span>
      </motion.div>

      <motion.h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 ${
          light ? 'text-white' : 'text-zinc-900'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-brand-500">{titleAccent}</span>
          </>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-zinc-400' : 'text-zinc-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
