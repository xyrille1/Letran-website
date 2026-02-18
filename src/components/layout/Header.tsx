"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const seal = PlaceHolderImages.find((img) => img.id === "letran-seal");

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-700",
        scrolled
          ? "py-4 bg-background/95 backdrop-blur-md shadow-lg"
          : "py-10 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4 group">
          {seal && (
            <Image
              src={seal.imageUrl}
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 group-hover:rotate-12 transition-transform duration-500"
              data-ai-hint={seal.imageHint}
            />
          )}
          <span className="font-extrabold text-2xl tracking-tighter text-foreground">
            letran-manaoag
          </span>
        </Link>

        <div className="flex items-center space-x-12">
          <ul className="hidden lg:flex space-x-12 text-[10px] font-bold uppercase tracking-[0.2em]">
            <li>
              <Link href="#events" className="hover:text-primary transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="#vision" className="hover:text-primary transition-colors">
                Institutional
              </Link>
            </li>
            <li>
              <Link href="#programs" className="hover:text-primary transition-colors">
                Admissions
              </Link>
            </li>
          </ul>
          
          <button className="flex items-center space-x-3 group">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
              Menu
            </span>
            <div className="flex flex-col space-y-1.5">
              <span className="w-8 h-[2px] bg-foreground"></span>
              <span className="w-5 h-[2px] bg-foreground self-end group-hover:w-8 transition-all"></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
