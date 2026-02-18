"use client";

import Admissions from "@/components/sections/Admissions";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function AdmissionsPage() {
  const steps = [
    "Submit Online Application",
    "Pay Entrance Exam Fee",
    "Take Admission Test",
    "Submit Physical Documents",
    "Interview with Dean/Principal",
    "Final Enrollment Payment"
  ];

  return (
    <div className="pt-24">
      <div className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black cinzel mb-8">Admissions</h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
            Begin your journey toward becoming a Letranite. Our process is designed 
            to identify and nurture the next generation of Christlike citizens.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
             <Admissions />
          </div>
          <div>
            <Card className="rounded-[3rem] border-border bg-card shadow-xl sticky top-32">
              <CardContent className="p-10">
                <h3 className="text-2xl font-black cinzel mb-8">Enrollment Steps</h3>
                <ul className="space-y-6">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <span className="font-medium text-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    Need more help? Our AI Assistant is available 24/7 to answer specific queries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
