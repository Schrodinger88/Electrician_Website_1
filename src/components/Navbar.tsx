import { Phone, Lightning, List } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
              <Lightning weight="fill" className="w-6 h-6 text-zinc-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">ProElectric</span>
              <span className="text-xs text-zinc-400 tracking-tight">Licensed & Insured</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-zinc-300 hover:text-white font-medium text-sm rounded-xl hover:bg-zinc-800/50 transition-all duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <motion.a
              href="tel:+16133017913"
              className="hidden sm:flex items-center gap-2 bg-emerald-500 text-zinc-950 px-6 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone weight="fill" className="w-5 h-5" />
              <span className="hidden md:inline">(613) 301-7913</span>
              <span className="md:hidden">Call</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden flex items-center justify-center w-11 h-11 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              <List className="w-6 h-6" weight="bold" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
