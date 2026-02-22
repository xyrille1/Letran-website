"use client";

import { motion } from "framer-motion";
import Admissions from "@/components/sections/Admissions";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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

export default function AdmissionsPage() {
  const steps = [
    "Submit Online Application",
    "Pay Entrance Exam Fee",
    "Take Admission Test",
    "Submit Physical Documents",
    "Interview with Dean/Principal",
    "Final Enrollment Payment",
  ];

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
              ADMISSIONS <br />
              <span className="text-red-700">YOUR JOURNEY STARTS HERE</span>
            </motion.h1>

            {/* Description with border-draw animation */}
            <motion.div variants={fadeInUp} className="relative">
              <motion.p
                className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-red-700 pl-6"
                initial={{ borderLeftWidth: 0 }}
                animate={{ borderLeftWidth: 4 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Begin your journey toward becoming a Letranite. Our process is
                designed to identify and nurture the next generation of{" "}
                <span className="text-red-700 font-semibold italic">
                  Christlike citizens
                </span>
                .
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
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Admissions />
            </div>
            <div>
              <Card className="rounded-[3rem] border-border bg-card shadow-xl sticky top-32">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-black cinzel mb-8">
                    Enrollment Steps
                  </h3>
                  <ul className="space-y-6">
                    {steps.map((step, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <span className="font-medium text-foreground">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      Need more help? Our AI Assistant is available 24/7 to
                      answer specific queries.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.main>

      {/* FOOTER WITH SMOOTH HOVERS */}
      <footer className="bg-[#001233] py-4 border-t-4 border-red-700">
        <div className="container mx-auto px-6 flex justify-between items-center text-white/60 text-[10px] tracking-widest">
          <p>© 1620 - 2026 LETRAN OFFICIAL</p>
          <div className="flex gap-6">
            {["FACEBOOK", "TWITTER", "INSTAGRAM"].map((social) => (
              <motion.span
                key={social}
                whileHover={{
                  color: "#ffffff",
                  y: -3,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer transition-colors relative group"
              >
                {social}
                {/* Underline reveal effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-700 transition-all duration-300 group-hover:w-full" />
              </motion.span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
