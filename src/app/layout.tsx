import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaWidget from "@/components/layout/CtaWidget";

export const metadata: Metadata = {
  title: "Letran Manaoag | Arriba!",
  description: "Colegio de San Juan de Letran - Manaoag Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Cinzel:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-body antialiased bg-background flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CtaWidget />
      </body>
    </html>
  );
}
