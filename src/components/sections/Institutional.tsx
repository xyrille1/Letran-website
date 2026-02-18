"use client";

import { Rocket, Fingerprint, Globe } from "lucide-react";

export default function Institutional() {
  return (
    <section id="vision" className="py-48 bg-background overflow-hidden border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-10 block">
              Institutional Strategy
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight leading-[1] text-foreground cinzel">
              Vision 2027
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-xl">
              Our institutional roadmap marks a transition from a static academic
              hub to a dynamic, service-led ecosystem built for the next
              generation of digital learners.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { icon: Rocket, label: "Innovate" },
                { icon: Fingerprint, label: "Values" },
                { icon: Globe, label: "Reach" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-[2rem] bg-card shadow-sm flex flex-col items-center justify-center p-8 hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer border border-border"
                >
                  <item.icon className="text-primary w-8 h-8 mb-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-20 rounded-[5rem] shadow-2xl border border-border flex flex-col justify-between min-h-[550px] relative overflow-hidden group">
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <span className="text-7xl text-primary/10 block mb-12 italic cinzel">"</span>
              <p className="text-3xl md:text-5xl font-medium text-foreground leading-[1.2] mb-16 tracking-tight">
                To provide the children of Manaoag with a life-changing education.
              </p>
            </div>
            <div className="flex items-center space-x-8 relative z-10">
              <div className="w-20 h-[1px] bg-primary transition-all duration-700 group-hover:w-32"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                The Arriba Mission
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
