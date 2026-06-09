import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 py-6 ${scrolled ? 'bg-bg-dark/80 backdrop-blur-md py-4 border-b border-white/10' : ''}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-extrabold tracking-wider">
          <span className="gradient-text">MOHINI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative font-medium text-text-dim hover:text-text-light transition-colors text-base ${location.pathname === link.path ? 'text-text-light' : ''}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button className="md:hidden text-text-light text-3xl flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-[#0a192f]/80 backdrop-blur-md z-[1001] md:hidden"
              />

              {/* Drawer */}
              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 w-[80%] max-w-sm h-screen z-[1002] bg-[#112240] border-l border-white/5 shadow-2xl flex flex-col pt-8 px-8 md:hidden"
              >
                {/* Drawer Header with Logo */}
                <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
                  <Link to="/" className="text-2xl font-heading font-extrabold tracking-wider" onClick={() => setIsOpen(false)}>
                    <span className="gradient-text">MOHINI</span>
                  </Link>
                  <button
                    className="text-text-light text-4xl hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <HiX />
                  </button>
                </div>

                <ul className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="border-b border-white/5 pb-4 last:border-none"
                    >
                      <Link
                        to={link.path}
                        className={`text-2xl font-bold tracking-wide transition-all duration-300 hover:text-primary block ${location.pathname === link.path ? 'gradient-text' : 'text-text-light'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Section - Get in touch */}
                <div className="mt-auto mb-10 pt-8 border-t border-white/5 flex flex-col gap-3">
                  <span className="text-text-dim font-medium uppercase tracking-widest text-sm">Let's Connect</span>
                  <a href="/contact" onClick={() => setIsOpen(false)} className="text-text-light text-lg hover:text-primary transition-colors font-medium">
                    Say Hello 👋
                  </a>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
