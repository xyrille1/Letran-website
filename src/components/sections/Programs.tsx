"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    id: "program-higher-ed",
    title: "Higher Education",
    desc: "Empowering the next generation of business leaders, IT professionals, and educators.",
  },
  {
    id: "program-shs",
    title: "Senior High",
    desc: "Bridging the gap between secondary education and specialized professional readiness.",
  },
  {
    id: "program-basic-ed",
    title: "Basic Education",
    desc: "Holistic formation rooted in Dominican character and fundamental wisdom.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-48 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
              Offerings
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none text-foreground cinzel">
              The Path to Excellence
            </h2>
          </div>
          <Link
            href="#"
            className="mt-10 md:mt-0 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 border-border pb-3 hover:border-primary hover:text-primary transition-all"
          >
            Explore Full Curriculum
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-20">
          {PROGRAMS.map((p, idx) => {
            const img = PlaceHolderImages.find((i) => i.id === p.id);
            return (
              <div key={idx} className="group cursor-pointer transition-all">
                <div className="mb-12 overflow-hidden rounded-[3.5rem] aspect-[4/3] bg-zinc-100 shadow-2xl relative">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="mb-10 h-[1px] w-full bg-border relative">
                  <div className="absolute top-0 left-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors text-foreground cinzel">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-10 leading-relaxed text-base font-medium">
                  {p.desc}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:translate-x-4 inline-flex items-center transition-transform text-foreground">
                  Discover <ArrowRight className="ml-3 w-4 h-4" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
