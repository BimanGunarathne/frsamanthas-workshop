"use client";

import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}
