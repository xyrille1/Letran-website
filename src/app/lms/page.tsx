"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, ShieldCheck, Zap, Laptop, BookOpen } from "lucide-react";

export default function LmsPage() {
  return (
    <div className="pt-24 min-h-screen bg-zinc-50">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="flex justify-center mb-10">
            <div className="w-24 h-24 bg-foreground rounded-[2.5rem] flex items-center justify-center text-background">
              <Monitor className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black cinzel mb-8 text-foreground tracking-tighter">
            Canvas LMS
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            The world's leading learning management system, powering the digital
            classroom experience at Letran Manaoag. Empowering students and
            teachers through seamless collaboration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground text-background px-12 py-8 text-sm uppercase tracking-widest font-bold"
            >
              <Link
                href="https://canvas.instructure.com/login/canvas"
                target="_blank"
                rel="noreferrer"
              >
                Student Login
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-foreground/10 px-12 py-8 text-sm uppercase tracking-widest font-bold"
            >
              <Link
                href="https://canvas.instructure.com/login/canvas"
                target="_blank"
                rel="noreferrer"
              >
                Faculty Login
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Zap,
              title: "Fast Access",
              desc: "Instant access to course materials and real-time updates.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Platform",
              desc: "Enterprise-grade security for student data and academic work.",
            },
            {
              icon: Laptop,
              title: "Mobile Ready",
              desc: "Study anywhere with the Canvas app for iOS and Android.",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="rounded-[2.5rem] border-none shadow-xl bg-white p-10"
            >
              <CardContent className="p-0">
                <feature.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-black cinzel mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-[4rem] p-20 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <BookOpen className="w-12 h-12 text-primary mb-8" />
              <h2 className="text-4xl font-black cinzel mb-8">
                Digital Transformation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Our integration with Canvas LMS is a cornerstone of our Vision
                2027 institutional roadmap, ensuring our students are prepared
                for a digital-first global workforce.
              </p>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>{" "}
                  24/7 Tech Support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>{" "}
                  Digital Library Sync
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>{" "}
                  Interactive Grades
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-foreground rounded-[3rem] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
                  Canvas Dashboard Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
