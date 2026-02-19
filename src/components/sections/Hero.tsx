"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Globe,
  Sparkles,
  Trophy,
  Plus,
  Star,
} from "lucide-react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
    }),
  };

  const word = "Generation";
  const letters = word.split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 text-center overflow-hidden bg-[#001233] selection:bg-red-700/50"
    >
      {/* LAYER 1: Background & Particles */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001233]/95 via-[#001233]/80 to-[#001233]" />

        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute transition-transform duration-1000 ease-out"
              style={{
                left: `${(i * 137) % 100}%`,
                top: `${(i * 253) % 100}%`,
                transform: `translate(${mousePos.x * (15 + i)}px, ${mousePos.y * (15 + i)}px)`,
              }}
            >
              {i % 2 === 0 ? <Plus className="text-white w-3 h-3" /> : <Star className="text-white w-2 h-2" />}
            </div>
          ))}
        </div>

        <motion.h2
          style={{ y: textY, opacity: opacityFade }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.02] select-none cinzel whitespace-nowrap pointer-events-none"
        >
          ARRIBA
        </motion.h2>
      </div>

      {/* LAYER 2: Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="mb-10 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500/90">
              Admissions Open 2024-2025
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} custom={1} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[1] cinzel tracking-tighter">
              <span className="block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  BUILDING THE NEXT
                </motion.span>
              </span>
              
              <span className="relative inline-block px-2 group">
                <span className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full scale-150 animate-pulse" />
                <span className="relative flex justify-center text-red-600 italic font-light lowercase serif">
                  {letters.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{ delay: 0.8 + index * 0.04, duration: 0.5 }}
                      whileHover={{ scale: 1.2, color: "#ffffff", filter: "drop-shadow(0 0 8px #dc2626)" }}
                      className="inline-block transition-colors cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </span>
              {" "}
              <span className="opacity-90">OF EXCELLENCE</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="max-w-2xl mx-auto text-base md:text-xl text-zinc-400 leading-relaxed font-light mb-12"
          >
            Join{" "}
            <span className="relative inline-block text-white font-semibold">
              Letran-Manaoag
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
                className="absolute -bottom-1 left-0 h-[2px] bg-red-600 shadow-[0_0_8px_#dc2626]"
              />
            </span>{" "}
            to experience nearly a century of Dominican tradition.
          </motion.p>

          <motion.div variants={fadeInUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 w-full">
            <Button
              asChild
              className="h-16 w-full sm:w-auto px-10 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold transition-all duration-300 hover:-translate-y-2 shadow-[0_20px_40px_-15px_rgba(185,28,28,0.5)]"
            >
              <Link href="/admissions" className="flex items-center gap-2 uppercase tracking-widest text-xs">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-16 w-full sm:w-auto px-10 rounded-xl border-zinc-700 bg-transparent hover:bg-white hover:text-[#001233] text-white font-bold transition-all duration-300 hover:-translate-y-2"
            >
              <Link href="mailto:letranite@gmail.com" className="uppercase tracking-widest text-xs">
                Inquire Now
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {[
              { icon: <GraduationCap />, title: "Dominican Excellence", sub: "95+ Years of Legacy", custom: 4 },
              { icon: <Globe />, title: "Global Curriculum", sub: "World-Class Standards", custom: 5 },
              { icon: <CheckCircle2 />, title: "Values-Oriented", sub: "Character Building First", custom: 6 },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={item.custom}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(220, 38, 38, 0.3)" }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] transition-all duration-500"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28, strokeWidth: 1.5 } as any)}
                </div>
                <h3 className="font-bold text-white text-[11px] uppercase tracking-[0.2em] mb-2">{item.title}</h3>
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Info Cards */}
      <motion.div
        animate={{ y: [0, -15, 0], x: mousePos.x * 20 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-1/4 left-12 p-4 bg-white/5 backdrop-blur-xl border border-white/10 gap-4 items-center rounded-2xl shadow-2xl"
      >
        <Sparkles className="text-yellow-500 w-4 h-4 animate-pulse" />
        <div className="text-left">
          <p className="text-[8px] font-black text-white/40 uppercase">Accreditation</p>
          <p className="text-[10px] font-bold text-white uppercase">PAASCU Level III</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], x: mousePos.x * -20 }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-1/3 right-12 p-4 bg-white/5 backdrop-blur-xl border border-white/10 gap-4 items-center rounded-2xl shadow-2xl"
      >
        <Trophy className="text-yellow-500 w-4 h-4" />
        <div className="text-left">
          <p className="text-[8px] font-black text-white/40 uppercase">Top Rating</p>
          <p className="text-[10px] font-bold text-white uppercase">Quality Education</p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Explore</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-red-600"
          />
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
        .cinzel { font-family: 'Cinzel', serif; }
        .serif { font-family: 'Cinzel', serif; }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;