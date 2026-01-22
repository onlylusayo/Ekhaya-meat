"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiArrowUp, FiHome } from "react-icons/fi";

/* Animations */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

/* Dummy images for illustration; replace with real paths if available */
const cutImages: Record<string, string> = {
  "Shoulder blend": "/images/cattle-shoulder.jpg",
  "Short ribs": "/images/cattle-ribs.jpg",
  "Top side steak": "/images/cattle-topside.jpg",
  "T-bone": "/images/cattle-tbone.jpg",
  "Fillet": "/images/cattle-fillet.jpg",
  "Rib eye": "/images/cattle-ribeye.jpg",
  "Hump": "/images/cattle-hump.jpg",
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
  "Ribs": "/images/goat-ribs.jpg",
  "Neck": "/images/goat-neck.jpg",
};

const categories = [
  {
    name: "Cattle",
    cuts: [
      "Shoulder blend",
      "Short ribs",
      "Top side steak",
      "T-bone",
      "Fillet",
      "Rib eye",
      "Hump",
      "Rump steak",
      "Sirloin steak",
      "Cut beef",
    ],
  },
  {
    name: "Sheep",
    cuts: [
      "Lamb caras",
      "Loin chops",
      "Lamb legs",
      "Lamb Stew",
      "Lamb shanks",
      "Lamb neck",
    ],
  },
  {
    name: "Goat",
    cuts: [
      "Goat carcass",
      "Goat stew",
      "Loin chops",
      "Goat legs",
      "Ribs",
      "Neck",
    ],
  },
];

export default function MeatCutsPage() {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll up button after scrolling down
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="w-full bg-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-[#D4AF37]">
          All Meat Cuts
        </h1>

        {categories.map((category) => (
          <div key={category.name} className="mb-16">
            {/* Category Header */}
            <h2 className="text-3xl font-bold mb-6 text-[#0c0c0c]">{category.name}</h2>

            {/* Meat Cuts Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {category.cuts.map((cut, index) => (
                <motion.div
                  key={cut}
                  variants={cardVariant}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={cutImages[cut] || "/placeholder.svg"}
                      alt={cut}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-center mb-2">{cut}</h3>
                    <p className="text-gray-700 text-center text-sm">{category.name} premium cut</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Scroll / Home Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#D4AF37] text-black shadow-lg hover:bg-[#b9952f] transition-colors"
              title="Scroll to top"
            >
              <FiArrowUp size={24} />
            </button>
          )}
          <Link
            href="/"
            className="p-3 rounded-full bg-[#D4AF37] text-black shadow-lg hover:bg-[#b9952f] transition-colors"
            title="Back to Home"
          >
            <FiHome size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
