"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, History, Award } from "lucide-react";

export default function ArchivePage() {
  const pastEvents = [
    {
      year: "2023",
      title: "Arriba Night",
      desc: "A celebration of music and culture that brought together the whole Manaoag community.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    },
    {
      year: "2022",
      title: "Centennial Prep",
      desc: "Initial kickoff for our path towards the historic century milestone of the Manaoag campus.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    },
    {
      year: "2021",
      title: "Digital Leap",
      desc: "Our successful transition to hybrid learning during the global pandemic challenge.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="pt-24">
      <div className="bg-zinc-100 py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4 mb-6">
            <History className="w-8 h-8 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Letran Legacy</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black cinzel mb-8 text-foreground">Archive</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Exploring the records of our past achievements, milestones, and the 
            evolving story of Colegio de San Juan de Letran - Manaoag.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          {pastEvents.map((event, i) => (
            <Card key={i} className="rounded-[3rem] overflow-hidden border-none shadow-2xl group cursor-pointer">
              <div className="aspect-[4/5] relative">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-10 left-10">
                  <span className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest">
                    {event.year}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <h3 className="text-3xl font-black cinzel mb-4">{event.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{event.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center bg-foreground text-background p-20 rounded-[4rem]">
          <div>
            <Award className="w-16 h-16 text-primary mb-10" />
            <h2 className="text-4xl md:text-5xl font-black cinzel mb-8">Honoring Tradition</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every photograph and document in our archive represents a soul 
              formed in the light of truth. We preserve these memories to 
              inspire future generations of Letranites.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-white/5 rounded-3xl p-8 flex flex-col justify-center text-center">
              <span className="text-5xl font-black text-primary mb-2">1620</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Foundation Year</span>
            </div>
            <div className="aspect-square bg-white/5 rounded-3xl p-8 flex flex-col justify-center text-center">
              <span className="text-5xl font-black text-primary mb-2">400+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Years of Truth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
