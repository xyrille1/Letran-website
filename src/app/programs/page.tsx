"use client";

import Programs from "@/components/sections/Programs";
import CampusTour from "@/components/sections/CampusTour";

export default function ProgramsPage() {
  return (
    <div className="pt-24">
      <div className="bg-foreground py-24 text-background">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black cinzel mb-8">Programs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From basic education to specialized higher studies, we offer a comprehensive 
            academic path rooted in Dominican excellence and truth.
          </p>
        </div>
      </div>
      <Programs />
      <CampusTour />
    </div>
  );
}
