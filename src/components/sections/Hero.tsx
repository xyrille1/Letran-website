import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Globe,
  MousePointer2,
  Users,
  Trophy,
  Star,
  Plus,
} from "lucide-react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Parallax Background Tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 text-center overflow-hidden selection:bg-white/30"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#103667]/95 via-[#103667]/90 to-[#103667]/95" />
      
      {/* LAYER 1: Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-white/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{
            transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`,
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#dc3545]/15 rounded-full blur-[120px] animate-pulse-slow delay-700"
          style={{
            transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* LAYER 2: Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute transition-transform duration-1000 ease-out"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `${(i * 253) % 100}%`,
              transform: `translate(${mousePos.x * (15 + i)}px, ${mousePos.y * (15 + i)}px)`,
              opacity: 0.12,
            }}
          >
            {i % 3 === 0 ? (
              <Plus className="text-white w-4 h-4" />
            ) : i % 3 === 1 ? (
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            ) : (
              <Star className="text-white w-3 h-3" />
            )}
          </div>
        ))}
      </div>

      {/* LAYER 3: Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-top-4 duration-1000 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dc3545] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dc3545]"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
              Admissions Open 2024-2025
            </span>
          </div>

          <div className="mb-10 perspective-1000">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
              <span className="block opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 hover:tracking-wider transition-all cursor-default">
                Building the Next
              </span>
              <span className="relative inline-block animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 group">
                Generation
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#004AAD] animate-draw duration-1000 delay-1000 fill-none filter drop-shadow-[0_2px_1px_rgba(255,255,255,0.4)]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0 50 5 T 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="block italic font-light serif text-white/50 md:inline md:ml-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                of Excellence
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
              Join{" "}
              <span className="text-white font-bold border-b-2 border-white/30">
                Letran-Manaoag
              </span>{" "}
              to experience nearly a century of Dominican tradition blended with
              21st-century global innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
            {/* Start Your Journey Button - Now Static */}
            <Button className="group h-16 px-10 rounded-2xl bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-base font-bold shadow-2xl shadow-black/40 transition-all duration-300 active:scale-95 flex items-center gap-2 hover:-translate-y-1">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="h-16 px-10 rounded-2xl border-2 border-[#dc3545] bg-transparent hover:bg-[#dc3545] text-white text-base font-bold transition-all duration-300 backdrop-blur-sm group shadow-lg hover:-translate-y-1"
            >
              Inquire Now
              <span className="ml-2 group-hover:rotate-12 transition-transform inline-block">
                ?
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <GraduationCap />,
                label: "Dominican Excellence",
                sub: "95+ Years of Legacy",
                delay: "delay-[1200ms]",
              },
              {
                icon: <Globe />,
                label: "Global Curriculum",
                sub: "World-Class Standards",
                delay: "delay-[1400ms]",
              },
              {
                icon: <CheckCircle2 />,
                label: "Values-Oriented",
                sub: "Character Building First",
                delay: "delay-[1600ms]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative p-8 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:bg-white/15 animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${item.delay}`}
              >
                <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-white/10 text-white">
                  {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider relative z-10">
                  {item.label}
                </h3>
                <p className="text-xs text-white/50 mt-1 relative z-10">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block absolute top-1/4 left-12 p-4 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-float"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold text-white/40 uppercase">
              Top Rating
            </p>
            <p className="text-sm font-bold text-white">Quality Education</p>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block absolute bottom-1/4 right-12 p-4 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-float-delayed"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold text-white/40 uppercase">
              Excellence
            </p>
            <p className="text-sm font-bold text-white">PAASCU Accredited</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-in fade-in duration-1000 delay-[2000ms] cursor-pointer group">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
          <MousePointer2 className="w-3 h-3 group-hover:rotate-45 transition-transform" />
          <span>Explore</span>
        </div>
        <div className="h-12 w-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#dc3545] animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        @keyframes draw {
          from {
            stroke-dasharray: 0 100;
          }
          to {
            stroke-dasharray: 100 100;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-2deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-scroll {
          animation: scroll 2.5s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
        }
        .animate-draw {
          animation: draw 1.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .serif {
          font-family: "Cinzel", serif;
        }
      `}</style>
    </section>
  );
};

export default Hero;
