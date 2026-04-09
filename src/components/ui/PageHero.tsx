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
    <section className="bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 text-sm text-zinc-400 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-400">{breadcrumb}</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          className="text-zinc-400 text-lg leading-relaxed max-w-[60ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
