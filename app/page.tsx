"use client";

import React from "react";
import Hero from "./components/hero/page";
import HeroContent from "./section/hero/content";
import EkhayaGallery from "./section/hero/content-2";
import BoxFeature from "./section/hero/content3";

export default function Home() {
  return (
    <main className="w-full h-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Hero Content / Features */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <HeroContent />
      </section>

      {/* Gallery Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-12">
        <EkhayaGallery />
      </section>

      {/* Box Features / Highlights */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-12">
        <BoxFeature />
      </section>
    </main>
  );
}
