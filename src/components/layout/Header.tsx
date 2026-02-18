"use client";


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, GraduationCap, Search, Globe, User } from 'lucide-react';

/**
 * Navbar Component
 * * Features:
 * - Floating "Island" effect on scroll.
 * - Dynamic border-radius and width transitions.
 * - Framer Motion powered mobile menu and interactions.
 * - Glassmorphism effects.
 */

const navLinks = [
  { name: "Programs", href: "/programs" },
  { name: "Admissions", href: "/admissions" },
  { name: "Archive", href: "/archive" },
  { name: "Canvas LMS", href: "/lms" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the "Island" mode after 20px of scrolling
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ paddingTop: isScrolled ? 16 : 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6`}
      style={{ background: 'transparent' }}
    >
      <motion.nav
        layout
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className={`mx-auto flex items-center justify-between ${
          isScrolled
            ? "max-w-5xl bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white/40 px-6 py-2 rounded-full"
            : "max-w-full bg-transparent px-2 py-6 border-transparent"
        }`}
      >
        {/* Branding Area */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="flex items-center gap-3 cursor-pointer group relative z-[60]"
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            className={`relative flex items-center justify-center bg-blue-900 text-white rounded-full overflow-hidden shadow-lg ${
              isScrolled ? "h-9 w-9 md:h-10 md:w-10" : "h-12 w-12"
            }`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <GraduationCap size={isScrolled ? 18 : 24} />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent" />
          </motion.div>
          <div className="flex flex-col">
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className={`font-black tracking-tighter leading-none ${
                isScrolled ? "text-lg text-slate-900" : "text-2xl text-slate-800"
              }`}
            >
              LETRAN
            </motion.span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-blue-600">
              Manaoag
            </span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1 mr-4">
            {navLinks.map((link) => (
              <motion.li key={link.name} layout transition={{ type: 'spring', stiffness: 180, damping: 20 }}>
                <motion.a
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    activePath === link.href
                      ? 'text-blue-600 bg-blue-50/50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/50'
                  }`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <div className={`flex items-center gap-2 ${
            isScrolled ? "border-l border-slate-200/50 pl-4" : "pl-0"
          }`}>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#e0e7ef' }}
              whileTap={{ scale: 0.97 }}
              className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            >
              <Search size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1e40af' }}
              whileTap={{ scale: 0.97 }}
              className={`bg-blue-900 text-white font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95 transition-all ${
                isScrolled ? "px-5 py-2 text-[10px] rounded-full" : "px-6 py-3 text-xs rounded-xl"
              }`}
            >
              Enroll
              <ArrowRight size={14} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          {!isScrolled && (
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#e0e7ef' }}
              whileTap={{ scale: 0.97 }}
              className="p-2 text-slate-800"
            >
              <Search size={22} />
            </motion.button>
          )}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1, backgroundColor: '#e0e7ef' }}
            whileTap={{ scale: 0.97 }}
            className={`relative z-[60] p-2.5 transition-all duration-300 ${
              isScrolled ? "bg-blue-50 text-blue-900 rounded-full" : "bg-slate-100 text-slate-900 rounded-xl"
            }`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ type: "spring", damping: 22, stiffness: 180 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-[55] flex flex-col pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Main Menu</p>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 180, damping: 20 }}
                  className="text-5xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tighter"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto mb-16 space-y-6">
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.04, backgroundColor: '#1e40af' }}
                className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-900/20"
              >
                Start Application
              </motion.button>
              <div className="flex justify-between items-center text-slate-400 font-medium border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>English</span>
                </div>
                <div className="flex items-center gap-2 underline underline-offset-4 decoration-blue-100">
                  <User size={16} />
                  <span>Student Portal</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
