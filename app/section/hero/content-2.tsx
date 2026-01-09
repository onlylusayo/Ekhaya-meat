"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1604908554166-8e8d9a5c3a8c",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1625944525533-473f1a3d6f7d",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
  "https://images.unsplash.com/photo-1617191518004-339f4f2f0c97",
  "https://images.unsplash.com/photo-1603048297172-c92544798d95",
];

export default function EkhayaGallery() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else setColumns(3);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <section className="py-20 bg-[#fff0]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        >
          Gallery <span className="text-[#D4AF37]">Showcase</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => {
            const row = Math.floor(i / columns);
            const direction = row % 2 === 0 ? -150 : 150;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: direction, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative overflow-hidden rounded-xl shadow-lg border border-[#D1121220] bg-white"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-64 relative"
                >
                  <Image
                    src={img}
                    alt="Ekhaya Meat Product"
                    fill
                    className="object-cover rounded-xl hover:scale-110 transition-all duration-700"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
