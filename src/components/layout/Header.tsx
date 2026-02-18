"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const seal = PlaceHolderImages.find((img) => img.id === "letran-seal");
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Archive", href: "/archive" },
    { name: "Canvas LMS", href: "/lms" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-700",
        scrolled || !isHome
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "hover:text-primary transition-colors",
                    pathname === link.href && "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center space-x-3 group outline-none lg:hidden">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                  Menu
                </span>
                <div className="flex flex-col space-y-1.5">
                  <span className="w-8 h-[2px] bg-foreground"></span>
                  <span className="w-5 h-[2px] bg-foreground self-end group-hover:w-8 transition-all"></span>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border w-full sm:max-w-md p-12 flex flex-col justify-center">
              <SheetHeader className="mb-12">
                <SheetTitle className="cinzel text-4xl font-black tracking-tighter text-left">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <ul className="space-y-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-4xl font-bold cinzel hover:text-primary transition-colors block",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-4xl font-bold cinzel hover:text-primary transition-colors block",
                      pathname === "/" ? "text-primary" : "text-foreground"
                    )}
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <div className="mt-20 pt-12 border-t border-border">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-6">
                  Contact Us
                </p>
                <p className="text-sm font-medium mb-2">Castro St. Poblacion, Manaoag</p>
                <p className="text-sm font-medium">info@letran-manaoag.edu.ph</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
