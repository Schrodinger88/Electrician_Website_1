import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHero({ title, titleAccent, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-zinc-950 text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 text-[13px] text-zinc-500 mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="hover:text-zinc-300 transition-colors">Home</Link>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300">{breadcrumb}</span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] font-bold tracking-[-0.03em] leading-[1.1] mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-brand-400">{titleAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          className="text-zinc-400 text-base sm:text-[17px] leading-relaxed max-w-[55ch]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/[0.03] rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
