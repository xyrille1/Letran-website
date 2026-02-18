"use client";

import { MessageSquare, Headset } from "lucide-react";

export default function CtaWidget() {
  return (
    <div id="cta-widget" className="fixed bottom-12 right-12 z-40 group flex items-center justify-center transition-opacity duration-1000">
      <div className="absolute w-44 h-44 floating-widget pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text className="text-[8px] uppercase font-black tracking-[0.4em] fill-muted-foreground/30">
            <textPath xlinkHref="#circlePath">Admission • Inquire • Arriba • </textPath>
          </text>
        </svg>
      </div>
      <a
        href="mailto:letranite@gmail.com?subject=Letran%20Inquiry"
        className="w-16 h-16 bg-foreground rounded-full text-background shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative border border-white/5"
      >
        <MessageSquare className="w-6 h-6 group-hover:opacity-0 transition-opacity" />
        <Headset className="w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
}
