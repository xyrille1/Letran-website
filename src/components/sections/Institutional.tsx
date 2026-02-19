"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Fingerprint, Globe } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
  }),
};

export default function Institutional() {
  return (
    <section 
      id="vision" 
      className="py-24 md:py-48 overflow-hidden relative"
      // Background set to the requested cream tone
      style={{ backgroundColor: "rgb(251, 251, 239)" }}
    >
      {/* Subtle depth flare */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Column: Strategy */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span 
              variants={fadeInUp} 
              custom={0}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-red-600 mb-8 md:10 block"
            >
              Institutional Strategy
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp} 
              custom={1}
              className="text-5xl md:text-7xl font-black mb-8 md:12 tracking-tight leading-[1] text-[#001233] cinzel"
            >
              Vision 2027
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp} 
              custom={2}
              className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-12 md:16 max-w-xl font-medium"
            >
              Our institutional roadmap marks a transition from a static academic
              hub to a dynamic, service-led ecosystem built for the next
              generation of digital learners.
            </motion.p>
            
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {[
                { icon: Rocket, label: "Innovate" },
                { icon: Fingerprint, label: "Values" },
                { icon: Globe, label: "Reach" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  custom={3 + idx}
                  whileHover={{ y: -10, backgroundColor: "#ffffff", borderColor: "#dc2626" }}
                  className="aspect-square rounded-[1.5rem] md:rounded-[2.5rem] bg-white/50 border border-zinc-200/60 shadow-sm flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-500 group cursor-pointer"
                >
                  <item.icon className="text-[#001233] w-5 h-5 md:w-7 md:h-7 mb-2 md:mb-4 group-hover:text-red-600 group-hover:scale-110 transition-all duration-500" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-zinc-500 group-hover:text-[#001233] text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: The Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-zinc-200/50 flex flex-col justify-between min-h-[450px] md:min-h-[550px] relative overflow-hidden shadow-xl shadow-[#001233]/5 group"
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors duration-1000" />
            
            <div className="relative z-10">
              <span className="text-6xl md:text-8xl text-red-600/10 block mb-4 md:mb-8 italic cinzel">"</span>
              <p className="text-2xl md:text-5xl font-black text-[#001233] leading-[1.2] mb-8 md:12 tracking-tight cinzel uppercase">
                To provide the children of{" "}
                {/* Red underline span removed here */}
                <span className="text-red-600 italic font-light lowercase serif">
                  manaoag
                </span>{" "}
                with a life-changing education.
              </p>
            </div>

            <div className="flex items-center space-x-4 md:space-x-6 relative z-10 mt-auto">
              <div className="w-12 md:w-16 h-[2px] bg-red-600 transition-all duration-700 group-hover:w-24"></div>
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[#001233]">
                The Arriba Mission
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}