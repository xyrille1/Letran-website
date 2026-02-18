"use client";

import { useState } from "react";
import IntroScreen from "@/components/layout/IntroScreen";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Events from "@/components/sections/Events";
import Institutional from "@/components/sections/Institutional";
import Programs from "@/components/sections/Programs";
import Admissions from "@/components/sections/Admissions";
import CampusTour from "@/components/sections/CampusTour";
import Footer from "@/components/layout/Footer";
import CtaWidget from "@/components/layout/CtaWidget";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <main className="relative">
      <IntroScreen onEnter={() => setShowMain(true)} />
      
      <div
        className={`transition-opacity duration-1000 ${
          showMain ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Header />
        <Hero />
        <Events />
        <Institutional />
        <Programs />
        <Admissions />
        <CampusTour />
        <Footer />
        <CtaWidget />
      </div>
    </main>
  );
}
