"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const [selected, setSelected] = useState<number | null>(null); // Selected image index

  // Adjust columns based on window width
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

  // Open modal
  const openModal = (index: number) => setSelected(index);

  // Close modal
  const closeModal = () => setSelected(null);

  // Go to previous image
  const prevImage = () => setSelected((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));

  // Go to next image
  const nextImage = () => setSelected((prev) => (prev === null ? 0 : (prev + 1) % images.length));

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
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative overflow-hidden rounded-xl shadow-lg border border-[#D1121220] bg-white cursor-pointer"
                onClick={() => openModal(i)}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selected !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={closeModal}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           z-50 w-11/12 max-w-3xl flex flex-col items-center space-y-4"
              >
                <div className="relative w-full">
                  <Image
                    src={images[selected]}
                    alt={`Ekhaya Meat Product ${selected + 1}`}
                    width={800}
                    height={500}
                    className="object-cover rounded-xl"
                  />

                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                  >
                    <FiX size={24} />
                  </button>

                  {/* Prev / Next */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                  >
                    <FiChevronRight size={24} />
                  </button>
                </div>

                {/* Scrollable Thumbnails */}
                <div className="flex gap-3 overflow-x-auto py-2">
                  {images.map((imgThumb, i) => (
                    <div
                      key={i}
                      className={`relative w-24 h-16 flex-shrink-0 cursor-pointer border-2 rounded-lg ${
                        i === selected ? "border-[#D4AF37]" : "border-transparent"
                      }`}
                      onClick={() => setSelected(i)}
                    >
                      <Image
                        src={imgThumb}
                        alt={`Thumbnail ${i + 1}`}
                        width={100}
                        height={70}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
