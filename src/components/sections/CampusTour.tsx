"use client";

import { useState } from "react";
import { generateCampusTourItinerary, CampusTourPlannerOutput } from "@/ai/flows/campus-tour-planner-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Map as MapIcon, Footprints, Clock } from "lucide-react";

export default function CampusTour() {
  const [academicInterests, setAcademicInterests] = useState("");
  const [preferredAttractions, setPreferredAttractions] = useState("");
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<CampusTourPlannerOutput | null>(null);

  const handlePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await generateCampusTourItinerary({
        academicInterests,
        preferredAttractions: preferredAttractions.split(",").map(s => s.trim()).filter(Boolean),
      });
      setItinerary(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tour" className="py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
            GenAI Tour Planner
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-foreground cinzel mb-8">
            Plan Your Visit
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us what you're interested in, and we'll craft a personalized campus walk for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 bg-white p-10 rounded-[3rem] shadow-xl border border-border/50">
            <form onSubmit={handlePlan} className="space-y-8">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                  Academic Interests
                </label>
                <Input
                  placeholder="e.g. Computer Science, Business"
                  value={academicInterests}
                  onChange={(e) => setAcademicInterests(e.target.value)}
                  className="rounded-2xl py-6"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 block">
                  Places to See (Comma Separated)
                </label>
                <Input
                  placeholder="e.g. Gym, Library, Chapel"
                  value={preferredAttractions}
                  onChange={(e) => setPreferredAttractions(e.target.value)}
                  className="rounded-2xl py-6"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-8 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:bg-primary transition-all"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <MapIcon className="mr-2 w-5 h-5" />}
                Generate Route
              </Button>
            </form>
          </div>

          <div className="lg:col-span-8">
            {itinerary ? (
              <div className="grid gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="rounded-[2rem] border-none shadow-md bg-white p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Duration</span>
                        <p className="font-bold text-foreground">{itinerary.estimatedDuration}</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="rounded-[2rem] border-none shadow-md bg-white p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                        <Footprints className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Footwear</span>
                        <p className="font-bold text-foreground">{itinerary.recommendedFootwear}</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <Card className="rounded-[3rem] border-none shadow-2xl bg-white overflow-hidden animate-in zoom-in-95">
                  <CardHeader className="bg-foreground p-10 text-white">
                    <CardTitle className="cinzel text-2xl">Your Personal Itinerary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-10">
                    <div className="prose prose-zinc max-w-none text-foreground leading-relaxed whitespace-pre-line">
                      {itinerary.tourItinerary}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex items-center justify-center bg-zinc-200/50 rounded-[4rem] border-2 border-dashed border-zinc-300">
                <div className="text-center">
                  <MapIcon className="w-16 h-16 text-zinc-300 mx-auto mb-6" />
                  <p className="text-zinc-400 font-medium italic">Generate your tour to see the path...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
