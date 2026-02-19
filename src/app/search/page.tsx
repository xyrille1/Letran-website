"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  GraduationCap,
  FileText,
  BookOpen,
  Phone,
  ExternalLink,
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { searchContent, SearchResult } from "@/lib/search-data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  // Update query from URL params
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  // Live search results
  const searchResults = useMemo(() => searchContent(query), [query]);

  const getCategoryIcon = (category: SearchResult["category"]) => {
    switch (category) {
      case "program":
        return <GraduationCap size={20} className="text-blue-500" />;
      case "admissions":
        return <FileText size={20} className="text-green-500" />;
      case "requirement":
        return <BookOpen size={20} className="text-orange-500" />;
      case "contact":
        return <Phone size={20} className="text-purple-500" />;
      default:
        return <ArrowRight size={20} className="text-slate-400" />;
    }
  };

  const getCategoryLabel = (category: SearchResult["category"]) => {
    const labels: Record<string, string> = {
      program: "Academic Program",
      admissions: "Admissions",
      requirement: "Requirements",
      contact: "Contact",
      page: "Page",
      service: "Service",
    };
    return labels[category] || category;
  };

  const handleResultClick = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const quickLinks = [
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Archive", href: "/archive" },
    { name: "Canvas LMS", href: "https://dpp.instructure.com/login/canvas" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Search
          </h1>
          <p className="text-slate-500 text-lg">
            Find programs, announcements, and more
          </p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-8"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={24}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full pl-16 pr-6 py-5 text-lg bg-white border border-slate-200 rounded-2xl shadow-lg shadow-slate-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </form>
        </motion.div>

        {/* Search Results */}
        {query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
              {searchResults.length > 0
                ? `${searchResults.length} Result${searchResults.length > 1 ? "s" : ""} for "${query}"`
                : `No results for "${query}"`}
            </p>

            {searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map((result, i) => (
                  <motion.button
                    key={result.id}
                    onClick={() => handleResultClick(result.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.01, x: 5 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-200 hover:shadow-md transition-all group text-left"
                  >
                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                      {getCategoryIcon(result.category)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {result.title}
                        </span>
                        {result.href.startsWith("http") && (
                          <ExternalLink size={14} className="text-slate-400" />
                        )}
                      </div>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-2">
                        {result.description}
                      </p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-full">
                        {getCategoryLabel(result.category)}
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-slate-400 group-hover:text-blue-600 transition-colors mt-2"
                    />
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white border border-slate-200 rounded-xl">
                <p className="text-slate-500 mb-2">No results found</p>
                <p className="text-sm text-slate-400">
                  Try searching for "programs", "admissions", "requirements", or
                  "scholarship"
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Quick Links - show when no query */}
        {!query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
              Quick Links
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-slate-400 group-hover:text-blue-600 transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Enrollment",
              "Scholarships",
              "Senior High",
              "College",
              "Requirements",
              "Canvas",
            ].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-4 py-2 text-sm text-slate-600 bg-white border border-slate-200 hover:border-blue-200 hover:text-blue-600 rounded-full transition-all"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
