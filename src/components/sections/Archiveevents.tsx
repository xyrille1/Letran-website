"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
} as const;

const pastEvents = [
  {
    year: "2023",
    title: "Arriba Night",
    desc: "A celebration of music and culture that brought together the whole Manaoag community.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2022",
    title: "Centennial Prep",
    desc: "Initial kickoff for our path towards the historic century milestone of the Manaoag campus.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2021",
    title: "Digital Leap",
    desc: "Our successful transition to hybrid learning during the global pandemic challenge.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ArchiveEvents() {
  return (
    <section className="container mx-auto px-6 py-32">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="h-1 w-12 bg-red-700" />
        <span className="text-[10px] font-bold tracking-[0.4em] text-[#001233] uppercase">
          Past Events
        </span>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-3 gap-12"
      >
        {pastEvents.map((event, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card className="rounded-[3rem] overflow-hidden border-none shadow-2xl group cursor-pointer">
              <div className="aspect-[4/5] relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Year Badge */}
                <div className="absolute top-10 left-10">
                  <span className="bg-red-700 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest">
                    {event.year}
                  </span>
                </div>

                {/* Text */}
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <h3 className="text-3xl font-black cinzel mb-4">
                    {event.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {event.desc}
                  </p>
                </div>

                {/* Hover Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-red-700 w-0 group-hover:w-full transition-all duration-700"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}