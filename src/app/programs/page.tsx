"use client";

import { motion } from "framer-motion";
import Programs from "@/components/sections/Programs";
import CampusTour from "@/components/sections/CampusTour";

// Animation Variants for orchestration
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const },
  },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

export default function ProgramsPage() {
  return (
    <div className="bg-white selection:bg-red-800 selection:text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-20">
        {/* ANIMATED CLIP-PATH IMAGE */}
        <motion.div
          initial={{
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            opacity: 0,
          }}
          animate={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
          }}
          transition={{ duration: 1.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute right-0 top-0 h-full w-1/2 z-0 hidden lg:block"
          style={{
            backgroundImage: "url(/images/programs-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        />

        {/* WATERMARK ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        >
          <h2 className="text-[20vw] font-black cinzel">1620</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-6"
        >
          <div className="max-w-2xl">
            {/* Top Line & Text */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-1 bg-[#001233]"
              />
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#001233] uppercase">
                Colegio de San Juan de Letran
              </span>
            </motion.div>

            {/* Title with Split Effect */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black cinzel text-[#001233] leading-tight mb-6"
            >
              LETRAN'S <br />
              <span className="text-red-700">ACADEMIC PATHWAY</span>
            </motion.h1>

            {/* Description with border-draw animation */}
            <motion.div variants={fadeInUp} className="relative">
              <motion.p
                className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-red-700 pl-6"
                initial={{ borderLeftWidth: 0 }}
                animate={{ borderLeftWidth: 4 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                In a historic move towards specialized excellence, Letran
                officially transitions to a{" "}
                <span className="text-red-700 font-semibold italic">
                  renewable curriculum
                </span>{" "}
                through Dominican truth and global innovation.
              </motion.p>
            </motion.div>

            {/* INTERACTIVE CTA */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6">
              <motion.span
                whileHover={{ scale: 1.1, color: "#991b1b" }}
                whileTap={{ scale: 0.95 }}
                className="text-red-700 font-bold italic tracking-widest cursor-pointer select-none"
              >
                ARRIBA!
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STRIP ANIMATION */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "circOut" }}
        className="w-full h-2 flex origin-center"
      >
        <div className="flex-1 bg-[#001233]"></div>
        <div className="flex-1 bg-red-700"></div>
        <div className="flex-1 bg-yellow-500"></div>
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="bg-white relative"
      >
        <Programs />
        <CampusTour />
      </motion.main>


    </div>
  );
}
