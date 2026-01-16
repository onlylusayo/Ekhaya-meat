"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ------------------ Animations ------------------ */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const cutVariant = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const textVariant = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const imageVariant = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export default function MethodsSection() {
  const buttonClass =
    "px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition-colors duration-300";

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const cutsRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    {
      id: "cattle",
      name: "Cattle",
      description: "Experience the bold, hearty flavor of our premium beef.",
      image: "/images/o1.png",
      cuts: [
        { id: "cattle-rib", name: "Rib", description: "Juicy rib cuts", image: "/images/cattle-ribs.jpg" },
        { id: "cattle-shoulder", name: "Shoulder", description: "Tender shoulder cuts", image: "/images/chuck.jpg" },
        { id: "cattle-loin", name: "Brisket", description: "Premium Brisket cuts", image: "/images/brisket.jpg" },
      ],
    },
    {
      id: "sheep",
      name: "Sheep",
      description: "Indulge in the rich, succulent taste of our sheep meat.",
      image: "/images/o2.png",
      cuts: [
        { id: "sheep-leg", name: "Leg", description: "Delicious leg cuts", image: "/images/mutton-leg.jpg" },
        { id: "sheep-chop", name: "Chop", description: "Tender chops", image: "/images/mutton-rack.jpg" },
        { id: "sheep-shoulder", name: "Shoulder", description: "Flavorful shoulder cuts", image: "/images/mutton-shoulder.jpg" },
      ],
    },
    {
      id: "goat",
      name: "Goat",
      description: "Discover the robust, authentic taste of our goat meat.",
      image: "/images/o-goat.png",
      cuts: [
        { id: "goat-shoulder", name: "Shoulder", description: "Flavorful shoulder cuts", image: "/images/goat-shoulder.jpg" },
        { id: "goat-leg", name: "Leg", description: "Tender leg cuts", image: "/images/goat-leg.jpg" },
        { id: "goat-loin", name: "Loin", description: "Premium loin cuts", image: "/images/goat-ribs.jpg" },
      ],
    },
  ];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const handleExplore = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setTimeout(() => {
      cutsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="w-full bg-white py-16">
      {/* ---------- Animal Cards ---------- */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {categories.map((category) => (
          <motion.div key={category.id} variants={cardVariant}>
            <div className="border border-[#D4AF37] p-6 rounded-md bg-white flex flex-col items-center">
              <Image
                src={category.image}
                alt={category.name}
                width={120}
                height={80}
                className="h-auto w-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-[#0c0c0c] mb-2 text-center">
                {category.name}
              </h3>
              <p className="text-gray-700 text-center mb-4">{category.description}</p>
              <button
                className={buttonClass}
                onClick={() => handleExplore(category.id)}
              >
                Explore More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------- Meat Cuts Section ---------- */}
      {selectedCategoryData && (
        <div ref={cutsRef} className="max-w-7xl mx-auto mt-16 px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-[#0c0c0c]">
              {selectedCategoryData.name} Meat Cuts
            </h2>
            <Link href="/meat-cuts" className={buttonClass}>
              View All Cuts
            </Link>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {selectedCategoryData.cuts.map((cut) => (
              <motion.div
                key={cut.id}
                variants={cutVariant}
                whileHover={{ scale: 1.05 }}
                className="border border-[#D4AF37] p-6 rounded-md flex flex-col items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="w-full flex justify-center">
                  <Image
                    src={cut.image}
                    alt={cut.name}
                    width={150}
                    height={150}
                    className="object-contain mb-4"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-center">{cut.name}</h3>
                <p className="text-gray-700 text-center">{cut.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ---------- Our Methods Section ---------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 px-4 gap-10 items-center">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-sm text-[#D4AF37] tracking-widest font-semibold">
            OUR METHODS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0c0c0c] mt-4 leading-tight">
            Pasture Raised <br /> Promise
          </h2>

          <p className="italic text-gray-800 mt-3">
            Animal welfare is of the utmost importance to us.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            That’s why we only work with farms and processors that share our
            passion for good animal husbandry. We promise every animal has been
            raised on lush pastures — naturally, without hormones or antibiotics.
          </p>

          <div className="mt-6">
            <Link href="/methods" className={buttonClass}>
              Explore Our Process
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full h-[400px]"
        >
          <Image
            src="/images/our-m.jpg"
            alt="Pasture raised farming"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
