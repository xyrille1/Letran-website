"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-background" style={{ backgroundColor: '#001233' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Branding Section */}
          <div className="md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/let-logo.png"
                alt="Letran Logo"
                className="h-32 w-32 object-contain"
              />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Letran Manaoag
              </span>
            </div>
            <p className="text-white/60 max-w-xs leading-relaxed text-sm">
              Building a legacy of truth and excellence through life-changing
              Catholic education since 1620.
            </p>
          </div>

          {/* Spacer for layout */}
          <div className="hidden lg:block"></div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
              Resources
            </h4>
            <ul className="space-y-4 text-sm text-white/80 font-medium">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  SMS Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Canvas LMS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Digital Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/80 font-light">
              <li className="leading-relaxed">
                Castro St. Poblacion,
                <br />
                Manaoag, Pangasinan
              </li>
              <li>info@letran-manaoag.edu.ph</li>
              <li>+63 (075) 529 1234</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40">
          <p className="mb-4 sm:mb-0">
            ©{new Date().getFullYear()} Colegio de San Juan de Letran - Manaoag
          </p>
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            {/* Policy Links */}
            <div className="flex space-x-6 text-white/60">
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
