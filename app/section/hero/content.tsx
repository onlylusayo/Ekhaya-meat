"use client";

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

/* ================= Categories ================= */

const categories = [
  {
    id: "cattle",
    name: "Cattle",
    description: "Bold, hearty flavour from expertly raised premium beef.",
    image: "/images/o1.png",
  },
  {
    id: "sheep",
    name: "Sheep",
    description: "Rich, succulent sheep meat prepared to the highest standards.",
    image: "/images/o2.png",
  },
  {
    id: "goat",
    name: "Goat",
    description: "Authentic goat meat with a deep, distinctive taste.",
    image: "/images/o-goat.png",
  },
];

/* ================= Component ================= */

export default function MeatCategoriesSection() {
  const buttonClass =
    "px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition";

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
          {/* View All Cuts */}
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

              <h3 className="text-2xl font-bold mb-3">
                {category.name}
              </h3>

              <p className="text-gray-700 text-lg">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
