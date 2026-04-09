import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Lightning, List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
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
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" id="logo-link">
              <div className="bg-brand-500 p-2 rounded-lg group-hover:bg-brand-600 transition-colors duration-200">
                <Lightning weight="fill" className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold text-white tracking-tight leading-tight">ProElectric</span>
                <span className="text-[10px] text-zinc-500 tracking-wide uppercase font-medium">Licensed & Insured</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3.5 py-2 font-medium text-[13px] rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-white bg-white/[0.08]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+16133017913"
                id="nav-call-btn"
                className="hidden sm:flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-600 transition-colors duration-200 text-[13px]"
              >
                <Phone weight="fill" className="w-3.5 h-3.5" />
                <span className="hidden md:inline">(613) 301-7913</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors duration-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                id="mobile-menu-toggle"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" weight="bold" />
                ) : (
                  <List className="w-5 h-5" weight="bold" />
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
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-zinc-950/98 backdrop-blur-2xl border-b border-white/[0.06] max-h-[calc(100dvh-64px)] overflow-y-auto"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="px-5 py-4 space-y-0.5">
                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                    >
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg font-medium text-[15px] transition-colors duration-200 ${
                          isActive
                            ? 'text-white bg-white/[0.08]'
                            : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-3 mt-2 border-t border-white/[0.06]">
                  <a
                    href="tel:+16133017913"
                    className="flex items-center justify-center gap-2.5 bg-brand-500 text-white px-6 py-3.5 rounded-lg font-semibold text-[15px] w-full hover:bg-brand-600 transition-colors"
                    id="mobile-call-btn"
                  >
                    <Phone weight="fill" className="w-4 h-4" />
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
