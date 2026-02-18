"use client";

import { useState } from "react";
import IntroScreen from "@/components/layout/IntroScreen";
import Hero from "@/components/sections/Hero";
import Events from "@/components/sections/Events";
import Institutional from "@/components/sections/Institutional";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="relative">
      <IntroScreen onEnter={() => setShowMain(true)} />
      
      <div
        className={`transition-opacity duration-1000 ${
          showMain ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Hero />
        <Events />
        <Institutional />
      </div>
    </div>
  );
}
