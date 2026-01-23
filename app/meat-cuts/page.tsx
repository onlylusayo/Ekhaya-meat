"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "../components/layout/navbar";

/* Animations */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

/* Cut Image Map (ID based) */

const cutImages: Record<string, string> = {
  "shoulder-blend": "/images/meat/shoulder-blend.jpeg",
  "short-ribs": "/images/meat/short-ribs.jpeg",
  "topside-steak": "/images/meat/top-side.JPG",
  "tbone": "/images/meat/t-bone.jpeg",
  "fillet": "/images/meat/fillet.jpeg",
  "ribeye": "/images/meat/rib-eye2.JPG",
  "hump": "/images/meat/hump.JPG",
  "rump-steak": "/images/meat/rump-steak.jpeg",
  "sirloin-steak": "/images/meat/sirlion-2.jpeg",
  "cut-beef": "/images/meat/cut-beef.jpeg",

  "lamb-caras": "/images/meat/Lamb-Carcas.JPG",
  "loin-chops": "/images/meat/loin-chops.JPG",
  "lamb-legs": "/images/meat/lamb-leg.JPG",
  "lamb-stew": "/images/meat/lamp-stew.jpeg",
  "lamb-shanks": "/images/meat/lamp-shanks.jpeg",
  "lamb-neck": "/images/meat/necks.jpeg",

  "goat-carcass": "/images/meat/goat-carca.WEBP",
  // "goat-stew": "/images/meat/goat-stew.jpg",
  "goat-legs": "/images/meat/g-leg.JPG",
  "ribs": "/images/meat/ribs.jpg",
  "neck": "/images/meat/goat-necks.JPG",
};

/* Categories (ID driven) */

const categories = [
  {
    name: "Cattle",
    cuts: [
      { id: "shoulder-blend", label: "Shoulder Blend" },
      { id: "short-ribs", label: "Short Ribs" },
      { id: "topside-steak", label: "Top Side Steak" },
      { id: "tbone", label: "T-Bone" },
      { id: "fillet", label: "Fillet" },
      { id: "ribeye", label: "Rib Eye" },
      { id: "hump", label: "Hump" },
      { id: "rump-steak", label: "Rump Steak" },
      { id: "sirloin-steak", label: "Sirloin Steak" },
      { id: "cut-beef", label: "Cut Beef" },
    ],
  },
  {
    name: "Sheep",
    cuts: [
      { id: "lamb-caras", label: "Lamb Caras" },
      { id: "loin-chops", label: "Loin Chops" },
      { id: "lamb-legs", label: "Lamb Legs" },
      { id: "lamb-stew", label: "Lamb Stew" },
      { id: "lamb-shanks", label: "Lamb Shanks" },
      { id: "lamb-neck", label: "Lamb Neck" },
    ],
  },
  {
    name: "Goat",
    cuts: [
      { id: "goat-carcass", label: "Goat Carcass" },
      // { id: "goat-stew", label: "Goat Stew" },
      { id: "goat-legs", label: "Goat Legs" },
      { id: "ribs", label: "Ribs" },
      { id: "neck", label: "Neck" },
    ],
  },
];

/* Component */

export default function MeatCutsPage() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[900px] flex items-center justify-center text-center">
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#D4AF37] mb-6 leading-tight">
            Premium Meats, Delivered Fresh
          </h1>

          <p className="text-white text-lg md:text-2xl mb-6">
            Carefully selected livestock, processed with care.
          </p>
          <Link
            href="#meat-cuts"
            className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f]"
          >
            Explore Cuts
          </Link>
        </div>
      </section>

      {/* Meat Cuts */}
      <section id="meat-cuts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {categories.map((category) => (
            <div key={category.name} className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-8">
                {category.name}
              </h2>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.cuts.map((cut) => (
                  <motion.div
                    key={cut.id}
                    variants={cardVariant}
                    className="rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl overflow-hidden"
                  >
                    <div className="aspect-square">
                      <Image
                        src={cutImages[cut.id] ?? "/images/placeholder.jpg"}
                        alt={cut.label}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="text-xl font-semibold">{cut.label}</h3>
                      <p className="text-gray-600 text-sm">
                        {category.name} premium cut
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll To Top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#D4AF37] shadow-lg hover:bg-[#b9952f]"
        >
          <FiArrowUp size={22} />
        </button>
      )}
    </>
  );
}
