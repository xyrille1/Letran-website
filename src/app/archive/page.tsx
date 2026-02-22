"use client";

import { motion } from "framer-motion";
import ArchiveHero from "@/components/sections/Archivehero";
import ArchiveEvents from "@/components/sections/Archiveevents";
import ArchiveLegacy from "@/components/sections/Archivelegacy";

export default function ArchivePage() {
  return (
    <div className="bg-white selection:bg-red-800 selection:text-white overflow-x-hidden">
      {/* HERO */}
      <ArchiveHero />

      {/* STRIP ANIMATION — mirrors Programs page */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "circOut" }}
        className="w-full h-2 flex origin-center"
      >
        <div className="flex-1 bg-[#001233]" />
        <div className="flex-1 bg-red-700" />
        <div className="flex-1 bg-yellow-500" />
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="bg-white relative"
      >
        <ArchiveEvents />
        <ArchiveLegacy />
      </motion.main>

      
    </div>
  );
}