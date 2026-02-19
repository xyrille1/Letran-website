"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Search,
  Globe,
  User,
  FileText,
  GraduationCap,
  Phone,
  BookOpen,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { searchContent, SearchResult } from "@/lib/search-data";

/**
 * Navbar Component
 * * Features:
 * - Floating "Island" effect on scroll.
 * - Dynamic border-radius and width transitions.
 * - Framer Motion powered mobile menu and interactions.
 * - Glassmorphism effects.
 */

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Admissions", href: "/admissions" },
  { name: "Archive", href: "/archive" },
  { name: "Canvas LMS", href: "https://dpp.instructure.com/login/canvas" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Live search results
  const searchResults = useMemo(
    () => searchContent(searchQuery),
    [searchQuery],
  );

  const getCategoryIcon = (category: SearchResult["category"]) => {
    switch (category) {
      case "program":
        return <GraduationCap size={16} className="text-blue-500" />;
      case "admissions":
        return <FileText size={16} className="text-green-500" />;
      case "requirement":
        return <BookOpen size={16} className="text-orange-500" />;
      case "contact":
        return <Phone size={16} className="text-purple-500" />;
      default:
        return <ArrowRight size={16} className="text-slate-400" />;
    }
  };

  const handleResultClick = (href: string) => {
    handleSearchClose();
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setMobileMenuOpen(false);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      handleSearchClose();
    }
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

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
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6`}
      style={{ background: "transparent" }}
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className={`mx-auto flex items-center justify-between ${
          isScrolled
            ? "max-w-5xl bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white/40 px-6 py-2 rounded-full"
            : "max-w-full bg-transparent px-2 py-6 border-transparent"
        }`}
      >
        {/* Branding Area */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="flex items-center gap-1 cursor-pointer group relative z-[60]"
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className={`relative overflow-hidden ${
              isScrolled
                ? "h-[120px] w-[120px] md:h-24 md:w-24"
                : "h-[120px] w-[120px] md:h-32 md:w-32"
            }`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <img
              src="/images/let-logo.png"
              alt="Letran Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="flex flex-col -ml-8">
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className={`font-black tracking-tighter leading-none ${
                isScrolled
                  ? "text-lg text-slate-900"
                  : "text-2xl text-slate-800"
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
              <motion.li
                key={link.name}
                layout
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
              >
                <motion.a
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    activePath === link.href
                      ? "text-blue-600 bg-blue-50/50"
                      : isScrolled
                        ? "text-slate-700 hover:text-blue-600 hover:bg-slate-100/50"
                        : "text-slate-400 hover:text-blue-600 hover:bg-slate-100/50"
                  }`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <div
            className={`flex items-center gap-2 ${
              isScrolled ? "border-l border-slate-200/50 pl-4" : "pl-0"
            }`}
          >
            <motion.button
              onClick={handleSearchOpen}
              whileHover={{ scale: 1.1, backgroundColor: "#e0e7ef" }}
              whileTap={{ scale: 0.97 }}
              className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            >
              <Search size={18} />
            </motion.button>
            <motion.a
              href="/admissions"
              whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
              whileTap={{ scale: 0.97 }}
              className={`bg-blue-900 text-white font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95 transition-all ${
                isScrolled
                  ? "px-5 py-2 text-[10px] rounded-full"
                  : "px-6 py-3 text-xs rounded-xl"
              }`}
            >
              Enroll
              <ArrowRight size={14} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          {!isScrolled && (
            <motion.button
              onClick={handleSearchOpen}
              whileHover={{ scale: 1.1, backgroundColor: "#e0e7ef" }}
              whileTap={{ scale: 0.97 }}
              className="p-2 text-slate-800"
            >
              <Search size={22} />
            </motion.button>
          )}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1, backgroundColor: "#e0e7ef" }}
            whileTap={{ scale: 0.97 }}
            className={`relative z-[60] p-2.5 transition-all duration-300 ${
              isScrolled
                ? "bg-blue-50 text-blue-900 rounded-full"
                : "bg-slate-100 text-slate-900 rounded-xl"
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
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
                Main Menu
              </p>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                  }}
                  className="text-5xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tighter"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto mb-16 space-y-6">
              <motion.a
                href="/admissions"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.04, backgroundColor: "#1e40af" }}
                className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-900/20"
              >
                Start Application
              </motion.a>
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

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-start justify-center pt-20 md:pt-32"
            onClick={handleSearchClose}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={24}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search programs, admissions, events..."
                  className="w-full py-5 pl-14 pr-20 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSearchClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              </form>

              {/* Live Search Results */}
              {searchQuery.trim() && (
                <div className="border-t border-slate-100 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((result, index) => (
                        <motion.button
                          key={result.id}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                          onClick={() => handleResultClick(result.href)}
                          className="w-full px-5 py-3 flex items-start gap-3 hover:bg-slate-50 transition-colors text-left"
                        >
                          <div className="mt-0.5">
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-slate-900 truncate">
                              {result.title}
                            </p>
                            <p className="text-sm text-slate-500 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-full">
                            {result.category}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-5 py-8 text-center">
                      <p className="text-slate-500">
                        No results found for "{searchQuery}"
                      </p>
                      <p className="text-sm text-slate-400 mt-1">
                        Try searching for programs, admissions, or requirements
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Quick Links - only show when no search query */}
              {!searchQuery.trim() && (
                <div className="border-t border-slate-100 px-5 py-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Quick Links
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Programs",
                      "Admissions",
                      "Scholarships",
                      "Canvas LMS",
                      "Contact",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setSearchQuery(item);
                          searchInputRef.current?.focus();
                        }}
                        className="px-3 py-1.5 text-sm text-slate-600 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-full transition-all"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
