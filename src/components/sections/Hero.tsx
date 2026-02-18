"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-background pt-20 text-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary block">
              Virtus • Scientia • Libertas
            </span>
          </div>
          <div className="mb-12">
            <h1 className="hero-heading font-black text-foreground cinzel">
              Formation of <br /> Christlike citizens
            </h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-14 leading-relaxed font-medium">
              Driven by Dominican excellence and nearly a century of tradition,
              we shape individuals to become beacons of truth and service in a
              rapidly evolving global landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8">
              <Button className="rounded-full bg-foreground text-background hover:bg-primary hover:text-white px-10 py-8 text-sm uppercase tracking-widest font-bold shadow-2xl transition-all">
                Enroll Now
              </Button>
              <Button variant="outline" className="rounded-full border-foreground/10 hover:bg-foreground hover:text-white px-10 py-8 text-sm uppercase tracking-widest font-bold transition-all">
                Inquire Admission
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-5">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
          Discovery
        </span>
        <div className="w-[1px] h-20 bg-border relative overflow-hidden scroll-indicator-line"></div>
      </div>

      <div className="absolute -left-20 top-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -right-20 top-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
}
