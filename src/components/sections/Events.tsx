"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section id="events" className="py-40 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-8 block">
              Student Life
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1] text-foreground cinzel">
              Experience,<br />connect, Arriba
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-muted-foreground text-sm max-w-xs mb-10 leading-relaxed">
              Join a vibrant community where academic rigor meets spiritual growth and cultural celebrations.
            </p>
            <div className="flex items-center justify-end space-x-5 group cursor-pointer">
              <span className="text-6xl font-black tracking-tighter group-hover:text-primary transition-colors">18</span>
              <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <ArrowRight className="w-5 h-5 -rotate-45" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-24 overflow-hidden">
          <div className="flex space-x-20 overflow-x-auto no-scrollbar py-8 items-center border-y border-border px-6">
            {DATES.map((d, i) => (
              <div
                key={i}
                className={`flex flex-col items-center shrink-0 transition-all cursor-pointer ${
                  d.active ? "relative scale-125" : "opacity-30 hover:opacity-100 hover:scale-110"
                }`}
              >
                {d.active ? (
                  <>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    <div className="w-16 h-16 bg-foreground text-background rounded-full flex flex-col items-center justify-center shadow-2xl border border-primary/20">
                      <span className="text-sm font-bold -mb-1">{d.day}</span>
                      <span className="text-[8px] font-bold uppercase">{d.name}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-sm font-bold mb-1">{d.day}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{d.name}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-12 overflow-x-auto no-scrollbar pb-16 px-6">
          {events.map((ev) => {
            const img = PlaceHolderImages.find((i) => i.id === ev.id);
            return (
              <div
                key={ev.id}
                className="min-w-[360px] md:min-w-[480px] aspect-[4/5] rounded-[4rem] overflow-hidden relative group shadow-2xl"
              >
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={ev.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>
                <div className="absolute top-10 right-10 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <Button
                    asChild
                    className="rounded-full bg-white text-black text-[10px] font-bold uppercase py-4 px-10 hover:bg-primary hover:text-white"
                  >
                    <Link href="/admissions">Register</Link>
                  </Button>
                </div>
                <div className="absolute bottom-16 left-12 right-12 text-white">
                  <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-60">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-2 text-primary" /> {ev.time}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2 text-primary" /> {ev.location}
                    </span>
                  </div>
                  <h4 className="text-4xl font-extrabold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {ev.title}
                  </h4>
                  <p className="text-sm opacity-50 line-clamp-2 leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
