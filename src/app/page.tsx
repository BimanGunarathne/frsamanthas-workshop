"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
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
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
