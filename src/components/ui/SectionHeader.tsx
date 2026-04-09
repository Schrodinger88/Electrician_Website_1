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
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        className={`inline-block px-3 py-1.5 rounded-full mb-5 ${
          light
            ? 'bg-white/[0.08] border border-white/[0.1]'
            : 'bg-brand-500/[0.08] border border-brand-500/[0.12]'
        }`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <span className={`text-[13px] font-semibold tracking-tight ${light ? 'text-brand-300' : 'text-brand-600'}`}>
          {badge}
        </span>
      </motion.div>

      <motion.h2
        className={`text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.1] mb-5 ${
          light ? 'text-white' : 'text-zinc-900'
        }`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: 0.08, duration: 0.5 }}
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
          className={`text-base sm:text-[17px] leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-zinc-400' : 'text-zinc-500'
          }`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.16, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
