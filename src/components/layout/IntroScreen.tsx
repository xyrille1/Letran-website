"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setContentOpacity(1), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setContentOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
      onEnter();
    }, 1000);
  };

  if (!isVisible) return null;

  const seal = PlaceHolderImages.find((img) => img.id === "letran-seal");

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-large-university-campus-with-lots-of-trees-and-buildings-42642-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div
        className="relative z-10 text-center px-4 transition-all duration-1000 transform"
        style={{
          opacity: contentOpacity,
          transform: contentOpacity === 1 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="mb-12">
          {seal && (
            <Image
              src={seal.imageUrl}
              alt={seal.description}
              width={112}
              height={112}
              className="mx-auto drop-shadow-2xl animate-pulse"
              data-ai-hint={seal.imageHint}
            />
          )}
        </div>
        <h2 className="text-white text-3xl font-bold mb-8 tracking-[0.4em] uppercase cinzel">
          Arriba Letran
        </h2>
        <div>
          <Button
            onClick={handleEnter}
            className="rounded-full border border-white/20 bg-transparent hover:bg-white hover:text-black text-white px-14 py-6 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-500"
          >
            Step Into Our World
          </Button>
        </div>
      </div>
    </div>
  );
}
