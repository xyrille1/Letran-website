"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const seal = PlaceHolderImages.find((img) => img.id === "letran-seal");

  return (
    <footer className="bg-foreground text-background py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-12">
              {seal && (
                <Image
                  src={seal.imageUrl}
                  alt="Logo"
                  width={48}
                  height={48}
                  className="brightness-0 invert"
                  data-ai-hint={seal.imageHint}
                />
              )}
              <span className="font-extrabold text-4xl tracking-tighter">
                letran-manaoag
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-12 leading-relaxed font-medium text-lg">
              Building a legacy of truth and excellence through life-changing
              Catholic education since 1620.
            </p>
            <div className="flex space-x-8">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary mb-10">
              Resources
            </h4>
            <ul className="space-y-6 text-sm text-muted-foreground font-bold uppercase tracking-widest">
              <li><Link href="#" className="hover:text-background transition-colors">SMS Portal</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Canvas LMS</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Digital Library</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary mb-10">
              Contact
            </h4>
            <ul className="space-y-6 text-sm text-muted-foreground font-medium">
              <li className="leading-relaxed">Castro St. Poblacion,<br />Manaoag, Pangasinan</li>
              <li>info@letran-manaoag.edu.ph</li>
              <li>+63 (075) 529 1234</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-muted-foreground/50 font-bold uppercase tracking-[0.3em]">
          <p>© 2024 Colegio de San Juan de Letran - Manaoag. Arriba!</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <Link href="#" className="hover:text-background">Privacy Policy</Link>
            <Link href="#" className="hover:text-background">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
