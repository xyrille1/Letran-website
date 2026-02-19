"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";

const PROGRAMS = [
  {
    id: "program-higher-ed",
    title: "Higher Education",
    subtitle: "Strategic Partnership",
    desc: "Officially transitioned to industry-leading energy and tech modules through strategic global partnerships.",
  },
  {
    id: "program-shs",
    title: "Senior High",
    subtitle: "Renewable Foundation",
    desc: "A historic move towards sustainability, bridging the gap with specialized professional readiness strands.",
  },
  {
    id: "program-basic-ed",
    title: "Basic Education",
    subtitle: "Dominican Character",
    desc: "Holistic formation rooted in fundamental wisdom and the Arriba spirit for the next generation of Knights.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export default function Programs() {
  return (
    <section id="programs" className="py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Layout Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black cinzel text-[#001233] mb-4">
            ACADEMIC <span className="text-red-700 font-light italic uppercase tracking-tighter">Offerings</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="h-1 bg-yellow-500 mx-auto"
          />
        </motion.div>

        {/* The Grid: Animated */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {PROGRAMS.map((p, idx) => {
            const img = PlaceHolderImages.find((i) => i.id === p.id);
            return (
              <motion.div 
                key={idx} 
                variants={cardVariants}
                className="group relative bg-white border border-zinc-200 p-1 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#001233]">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out grayscale group-hover:grayscale-0"
                    />
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001233] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                </div>

                {/* Content Area */}
                <div className="p-8 relative bg-white">
                  <span className="text-[10px] font-bold text-yellow-600 tracking-[0.3em] uppercase block mb-3">
                    {p.subtitle}
                  </span>
                  
                  <h3 className="text-2xl font-black cinzel text-[#001233] mb-4 group-hover:text-red-700 transition-colors duration-300">
                    {p.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 border-l-2 border-zinc-100 pl-4 group-hover:border-red-700 transition-all duration-500">
                    {p.desc}
                  </p>

                  <Link 
                    href={`/programs/${p.id}`}
                    className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#001233] relative overflow-hidden"
                  >
                    <motion.span 
                      whileHover={{ x: 5 }} 
                      className="flex items-center gap-2 group-hover:text-red-700 transition-colors"
                    >
                      Explore Course <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>

                {/* Bottom Border Growth Animation */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-red-700 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                <div className="absolute bottom-0 right-0 h-[3px] bg-yellow-500 w-0 group-hover:w-1/3 transition-all duration-700 delay-100 ease-in-out" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Arriba Banner: Scroll Parallax Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="mt-24 text-center"
        >
          <p className="text-zinc-400 font-black cinzel text-6xl md:text-[10vw] leading-none select-none tracking-tighter">
            ALWAYS LETRAN
          </p>
        </motion.div>
      </div>
    </section>
  );
}