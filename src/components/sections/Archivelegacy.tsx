"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const },
  },
} as const;

const stats = [
  { value: "1620", label: "Foundation Year" },
  { value: "400+", label: "Years of Truth" },
];

export default function ArchiveLegacy() {
  return (
    <section className="container mx-auto px-6 pb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid lg:grid-cols-2 gap-20 items-center bg-[#001233] text-white p-12 md:p-20 rounded-[4rem]"
      >
        {/* Left */}
        <motion.div variants={fadeInUp}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-red-500 mb-10" />
          </motion.div>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-8 bg-red-700" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">
              Letran Legacy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black cinzel mb-8 leading-tight">
            HONORING <br />
            <span className="text-red-500">TRADITION</span>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed border-l-4 border-red-700 pl-6">
            Every photograph and document in our archive represents a soul
            formed in the light of truth. We preserve these memories to inspire
            future generations of{" "}
            <span className="text-white font-semibold italic">Letranites</span>.
          </p>
        </motion.div>

        {/* Right — Stats */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="aspect-square bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center text-center cursor-default"
            >
              <span className="text-5xl font-black text-red-500 mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}