"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ================= Animations ================= */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

/* ================= Meat Cut Images ================= */

const cutImages: Record<string, string> = {
  "Shoulder blend": "/images/cattle-shoulder.jpg",
  "Short ribs": "/images/cattle-ribs.jpg",
  "Top side steak": "/images/cattle-topside.jpg",
  "T-bone": "/images/cattle-tbone.jpg",
  Fillet: "/images/cattle-fillet.jpg",
  "Rib eye": "/images/cattle-ribeye.jpg",
  Hump: "/images/cattle-hump.jpg",
  "Rump steak": "/images/cattle-rump.jpg",
  "Sirloin steak": "/images/cattle-sirloin.jpg",
  "Cut beef": "/images/cattle-cut.jpg",
  "Lamb caras": "/images/sheep-caras.jpg",
  "Loin chops": "/images/sheep-loin.jpg",
  "Lamb legs": "/images/sheep-legs.jpg",
  "Lamb Stew": "/images/sheep-stew.jpg",
  "Lamb shanks": "/images/sheep-shanks.jpg",
  "Lamb neck": "/images/sheep-neck.jpg",
  "Goat carcass": "/images/goat-carcass.jpg",
  "Goat stew": "/images/goat-stew.jpg",
  "Goat legs": "/images/goat-legs.jpg",
  Ribs: "/images/goat-ribs.jpg",
  Neck: "/images/goat-neck.jpg",
};

/* ================= Categories ================= */

const categories = [
  {
    id: "cattle",
    name: "Cattle",
    description: "Bold, hearty flavour from expertly raised premium beef.",
    image: "/images/o1.png",
    cuts: [
      "Shoulder blend",
      "Short ribs",
      "Top side steak",
      "T-bone",
      "Fillet",
      "Rib eye",
    ],
  },
  {
    id: "sheep",
    name: "Sheep",
    description: "Rich, succulent sheep meat prepared to the highest standards.",
    image: "/images/o2.png",
    cuts: [
      "Lamb caras",
      "Loin chops",
      "Lamb legs",
      "Lamb Stew",
      "Lamb shanks",
    ],
  },
  {
    id: "goat",
    name: "Goat",
    description: "Authentic goat meat with a deep, distinctive taste.",
    image: "/images/o-goat.png",
    cuts: ["Goat carcass", "Goat stew", "Goat legs", "Ribs"],
  },
];

/* ================= Component ================= */

export default function MeatCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const cutsRef = useRef<HTMLDivElement | null>(null);

  const buttonClass =
    "px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition";

  const handleView = (id: string) => {
    setActiveCategory(id);
    setTimeout(() => cutsRef.current?.scrollIntoView({ behavior: "smooth" }), 150);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Title ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c0c0c]">
            Our Meat Categories
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
            Carefully selected livestock, professionally processed for premium quality.
          </p>
        </div>

        {/* ===== Category Cards ===== */}
        <motion.div
          className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >

          {/* View All Cuts – visible without clicking */}
          <div className="absolute -top-16 right-0">
            <Link href="/meat-cuts" className={buttonClass}>
              View All Cuts
            </Link>
          </div>

          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariant}
              className="rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={120}
                height={80}
                className="mb-6 object-contain"
              />

              <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
              <p className="text-gray-700 text-lg mb-6">{category.description}</p>

              <button
                onClick={() => handleView(category.id)}
                className={buttonClass}
              >
                View
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== 3 Meat Cuts Preview ===== */}
        {activeCategory &&
          categories
            .filter((cat) => cat.id === activeCategory)
            .map((cat) => (
              <div key={cat.id} ref={cutsRef} className="mt-16">
                <h3 className="text-3xl font-bold mb-6">
                  {cat.name} Meat Cuts
                </h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                >
                  {cat.cuts.slice(0, 3).map((cut) => (
                    <motion.div
                      key={cut}
                      variants={cardVariant}
                      className="rounded-2xl border border-[#D4AF37] bg-[#FFF9E6] shadow-md hover:shadow-xl transition overflow-hidden"
                    >
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={cutImages[cut]}
                          alt={cut}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-5 text-center">
                        <h4 className="text-xl font-semibold mb-2">{cut}</h4>
                        <p className="text-gray-700">
                          {cat.name} premium cut
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}

      </div>
    </section>
  );
}
