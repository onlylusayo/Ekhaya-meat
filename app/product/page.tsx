"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/* Motion Variants */
const textVariant = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const imageVariant = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

/* Product Categories */
const productCategories = [
  {
    name: "Fresh Red Meat",
    products: [
      { name: "Beef", image: "/images/meat2.jpg" },
      { name: "Goat Meat", image: "/images/goat-leg.jpg" },
      { name: "Mutton", image: "/images/mutton-shoulder.jpg" },
      { name: "Mixed Red Meat Cuts", image: "/images/IMG_2909.jpg" },
    ],
  },
  {
    name: "Primary Meat Cuts",
    products: [
      { name: "Steak Cuts", image: "/images/steak-rump.jpg" },
      { name: "Ribs", image: "/images/ribs.jpg" },
      { name: "Brisket", image: "/images/brisket.jpg" },
      { name: "Chunks and Portions", image: "/images/chuck.jpg" },
      { name: "Bone-in Cuts", image: "/images/meat-splash-1.jpg" },
      { name: "Boneless Cuts", image: "/meat-splash-2.jpg" },
    ],
  },
  {
    name: "Processed Meat Products",
    products: [
      { name: "Breakfast Sausages", image: "/images/meat/Beef-Saus.JPG" },
      { name: "Cocktail Sausages", image: "/images/meat/cock-tail.jpg" },
      { name: "Minced Meat", image: "/images/meat/mined.jpg" },
      { name: "Hungarians", image: "/images/meat/hungarian-sausages.JPG" },
      { name: "Chicken Polonies", image: "/images/meat/c-polony.png" },
      { name: "Sliced Polonies", image: "/images/meat/Polony.WEBP" },
      { name: "Corned Beef", image: "/images/meat/corned-beef.JPG" },
      { name: "Beef Sausages", image: "/images/meat/Beef-Saus.JPG" },
    ],
  },
];

export default function ProductsPage() {
  const productsRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full relative bg-black py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-6 leading-tight">
              Fresh. Flavourful. Made for Your Order.
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mb-6">
              From perfectly trimmed cuts to signature sausages that have
              become family favourites, discover why many customers trust
              Ekhaya for high-quality livestock meat processed with strict
              hygiene and safety standards.
            </p>

            <span className="inline-block mt-4 px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] font-semibold rounded-full text-sm">
              100% Order-Driven Production
            </span>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/bground.png"
              alt="Ekhaya Meats"
              fill
              className="object-cover brightness-90"
            />
          </motion.div>
        </div>
      </section>

      {/* Products by Category */}
      <section ref={productsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {productCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-4xl font-bold mb-10 text-[#D4AF37] text-center">
                {category.name}
              </h2>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                {category.products.map((product) => (
                  <motion.div
                    key={product.name}
                    variants={cardVariant}
                    className="group overflow-hidden rounded-xl border border-[#D4AF37] bg-white shadow hover:shadow-xl transition"
                  >
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="font-semibold">{product.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}