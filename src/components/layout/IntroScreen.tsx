"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

type IntroScreenProps = {
  onEnter?: () => void;
};

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      setVisible(false);
      onEnter?.();
      return;
    }

    const vid = videoRef.current;

    const handleEnded = () => {
      setVisible(false);
      onEnter?.();
    };

    // Safety timeout in case 'ended' doesn't fire or autoplay is blocked
    // Keep intro visible for up to 32 seconds
    const fallback = window.setTimeout(() => {
      if (visible) {
        setVisible(false);
        onEnter?.();
      }
    }, 32000);

    if (vid) {
      vid.addEventListener("ended", handleEnded);
      const p = vid.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }

    return () => {
      window.clearTimeout(fallback);
      if (vid) vid.removeEventListener("ended", handleEnded);
    };
  }, [onEnter, visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/videos/loadingLetranComp.mp4"
        className="w-full h-full object-cover"
        playsInline
        muted
        autoPlay
      />
      <button
        aria-label="Skip introduction"
        onClick={() => {
          setVisible(false);
          onEnter?.();
        }}
        className="absolute top-6 right-6 group flex items-center gap-2
    bg-[#dc3545] backdrop-blur-md hover:bg-[#c32b3f] active:scale-95
    px-5 py-2.5 rounded-full text-sm font-medium text-white
    border border-[#dc3545]/30 transition-all duration-300 ease-out shadow-lg"
      >
        <span>Skip Intro</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
