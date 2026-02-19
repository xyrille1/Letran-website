"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const DATES = [
  { day: "22", name: "Fri" },
  { day: "23", name: "Sat" },
  { day: "24", name: "Sun" },
  { day: "25", name: "Mon" },
  { day: "26", name: "Tue" },
  { day: "28", name: "Thu", active: true },
  { day: "29", name: "Fri" },
  { day: "30", name: "Sat" },
  { day: "01", name: "Sun" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
  }),
};

export default function Events() {
  const events = [
    {
      id: "event-binyag",
      title: "Binyag Arriba 2024",
      time: "10:00 AM",
      location: "Grounds",
      desc: "The official welcoming ceremony for our freshmen and new Letranites.",
    },
    {
      id: "event-research",
      title: "Research Congress",
      time: "01:30 PM",
      location: "Research",
      desc: "A showcase of innovation and academic excellence from our college researchers.",
    },
  ];

  return (
    <section id="events" className="py-40 bg-white relative overflow-hidden">
      {/* Decorative Grid Pattern - Very subtle UI depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10"
        >
          <div>
            <motion.span 
              variants={fadeInUp} 
              custom={0}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-red-600 mb-6 block"
            >
              Student Life
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp} 
              custom={1}
              className="text-5xl md:text-7xl font-black tracking-tight leading-[1] text-[#001233] cinzel"
            >
              <span className="block">EXPERIENCE, CONNECT,</span>
              <span className="relative inline-block text-red-600 italic font-light lowercase serif mt-2 group">
                arriba
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-[3px] bg-red-600 shadow-[0_4px_10px_rgba(220,38,38,0.2)]"
                />
              </span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp} custom={2} className="text-right hidden md:block">
            <p className="text-zinc-500 text-sm max-w-xs mb-8 leading-relaxed font-medium">
              Join a vibrant community where academic rigor meets spiritual
              growth and cultural celebrations.
            </p>
            <div className="flex items-center justify-end space-x-6 group cursor-pointer">
              <span className="text-7xl font-black tracking-tighter text-[#001233] group-hover:text-red-600 transition-colors duration-500 cinzel">
                18
              </span>
              <div className="w-16 h-16 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center group-hover:bg-[#001233] group-hover:border-[#001233] transition-all duration-500 group-hover:-rotate-45">
                <ArrowRight className="w-6 h-6 text-zinc-400 group-hover:text-white" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Date Selector - Light Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-24"
        >
          <div className="flex space-x-12 md:space-x-20 overflow-x-auto no-scrollbar py-10 items-center border-y border-zinc-100 px-6">
            {DATES.map((d, i) => (
              <div
                key={i}
                className={`flex flex-col items-center shrink-0 transition-all duration-500 cursor-pointer ${
                  d.active ? "relative scale-125" : "opacity-30 hover:opacity-100 hover:scale-110"
                }`}
              >
                {d.active ? (
                  <div className="flex flex-col items-center">
                    <span className="absolute -top-6 text-[10px] font-bold text-red-600 uppercase tracking-widest">Today</span>
                    <div className="w-16 h-16 bg-[#001233] text-white rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-blue-900/10 border border-[#001233]">
                      <span className="text-lg font-black -mb-1">{d.day}</span>
                      <span className="text-[8px] font-black uppercase">{d.name}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-[#001233]">
                    <span className="text-lg font-bold mb-1 block">{d.day}</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">{d.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Cards - Refined Light Design */}
        <div className="flex space-x-8 overflow-x-auto no-scrollbar pb-16 px-6">
          {events.map((ev, i) => {
            const img = PlaceHolderImages.find((item) => item.id === ev.id);
            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="min-w-[320px] md:min-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden relative group border border-zinc-100 bg-zinc-50 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={ev.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
                {/* Lighter Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-100 group-hover:via-white/40 transition-all duration-500" />
                
                <div className="absolute top-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <Button
                    asChild
                    className="rounded-xl bg-[#001233] text-white text-[10px] font-black uppercase py-6 px-8 hover:bg-red-700 transition-all shadow-xl"
                  >
                    <Link href="/admissions">Register Now</Link>
                  </Button>
                </div>

                <div className="absolute bottom-12 left-10 right-10 text-[#001233] z-10">
                  <div className="flex gap-4 text-[9px] font-bold uppercase tracking-[0.1em] mb-4">
                    <span className="flex items-center px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-zinc-200 text-zinc-600">
                      <Clock className="w-3 h-3 mr-2 text-red-600" /> {ev.time}
                    </span>
                    <span className="flex items-center px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-zinc-200 text-zinc-600">
                      <MapPin className="w-3 h-3 mr-2 text-red-600" /> {ev.location}
                    </span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black mb-4 cinzel leading-tight group-hover:text-red-600 transition-colors duration-500">
                    {ev.title}
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium line-clamp-2 leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}