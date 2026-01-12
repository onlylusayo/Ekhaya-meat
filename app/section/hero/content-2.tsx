"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/f01.JPG", 
  "/images/f04.JPG", 
  "/images/f08.JPG", 
  "/images/ca.JPG", 
  "/images/f10.JPG", 
  "/images/sh.JPG", 
];

export default function EkhayaGallery() {
  const [columns, setColumns] = useState(3);

  // Adjust columns based on window width
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1); // mobile
      else if (window.innerWidth < 768) setColumns(2); // tablet
      else setColumns(3); // desktop
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <section className="py-20 bg-[#fff0]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        >
          Gallery <span className="text-[#D4AF37]">Showcase</span>
        </motion.h2>

        {/* Image Grid */}
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
                    alt={`Ekhaya Meat Product ${i + 1}`}
                    width={400}
                    height={256} 
                    className="object-cover w-full h-full rounded-xl hover:scale-110 transition-all duration-700"
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
