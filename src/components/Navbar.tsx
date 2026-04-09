import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Lightning, List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Service Area', path: '/service-area' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Detect scroll for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg'
            : 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/30'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-brand-500/50 transition-all duration-300">
                <Lightning weight="fill" className="w-6 h-6 text-zinc-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">ProElectric</span>
                <span className="text-[11px] text-zinc-400 tracking-tight">Licensed & Insured</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 font-medium text-sm rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-zinc-800/70'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+16133017913"
                className="hidden sm:flex items-center gap-2 bg-brand-500 text-zinc-950 px-5 py-2.5 rounded-xl font-bold hover:bg-brand-400 transition-all duration-300 shadow-lg hover:shadow-brand-500/50 text-sm"
              >
                <Phone weight="fill" className="w-4 h-4" />
                <span className="hidden md:inline">(613) 301-7913</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center w-11 h-11 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-300"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" weight="bold" />
                ) : (
                  <List className="w-6 h-6" weight="bold" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-[73px] left-0 right-0 bg-zinc-950 border-b border-zinc-800 shadow-2xl max-h-[calc(100dvh-73px)] overflow-y-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-brand-500/10 border border-brand-500/20'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-zinc-800 mt-4">
                  <a
                    href="tel:+16133017913"
                    className="flex items-center justify-center gap-3 bg-brand-500 text-zinc-950 px-6 py-4 rounded-xl font-bold text-lg w-full"
                  >
                    <Phone weight="fill" className="w-5 h-5" />
                    (613) 301-7913
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
