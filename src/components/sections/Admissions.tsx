"use client";

import { useState } from "react";
import { admissionsAssistant, AdmissionsAssistantOutput } from "@/ai/flows/admissions-assistant-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

export default function Admissions() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AdmissionsAssistantOutput | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await admissionsAssistant({ question });
      setResult(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="programs" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
              Admissions Helper
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none text-foreground cinzel mb-8">
              Start Your Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-lg">
              Have questions about enrollment, requirements, or our programs? Ask our AI assistant for immediate help and guidance on becoming a Letranite.
            </p>
            
            <form onSubmit={handleAsk} className="relative max-w-md">
              <Input
                placeholder="Ask about application deadlines..."
                className="rounded-full pl-6 pr-14 py-8 bg-card border-border shadow-sm focus-visible:ring-primary"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                disabled={loading}
                className="absolute right-2 top-2 h-12 w-12 rounded-full bg-foreground text-background"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
              </Button>
            </form>
          </div>

          <div className="relative">
            {result ? (
              <Card className="rounded-[3rem] border-none shadow-2xl bg-white overflow-hidden animate-in fade-in slide-in-from-bottom-5">
                <CardHeader className="bg-primary p-10 text-white">
                  <CardTitle className="cinzel text-2xl">Assistant's Response</CardTitle>
                </CardHeader>
                <CardContent className="p-10">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {result.answer}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="aspect-square rounded-[5rem] bg-accent/20 flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-primary/20">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Loader2 className={`w-8 h-8 text-primary ${loading ? 'animate-spin' : ''}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Awaiting your query</h3>
                <p className="text-sm text-muted-foreground">Ask anything about admissions to get started.</p>
              </div>
            )}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
