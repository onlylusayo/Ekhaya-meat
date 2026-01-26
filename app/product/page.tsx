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

/* Products Data */
const products = [
  { name: "Hungarians", image: "/images/meat/hungarian-sausages.JPG", description: "Delicious Hungarian sausages" },
  { name: "Chicken Polonies", image: "/images/meat/c-polony.png", description: "Premium chicken polonies" },
  { name: "Sliced Polonies", image: "/images/meat/Polony.WEBP", description: "Perfect for sandwiches" },
  { name: "Corned Beef", image: "/images/meat/corned-beef.JPG", description: "High-quality corned beef" },
  { name: "Beef Sausages", image: "/images/meat/Beef-Saus.JPG", description: "Juicy and flavorful" },
  { name: "Breakfast Sausages", image: "/images/meat/cock-tail.jpg", description: "Juicy and flavorful" },
  // { name: "Smoked Meat", image: "/images/meat/smoked-meat.JPG", description: "Richly smoked for taste" },
];

export default function ProductsPage() {
  const productsRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const buttonClass =
    "px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition-colors duration-300";

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full relative bg-black py-32 overflow-hidden">
        {/* Dark overlay */}
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
              From perfectly trimmed cuts to signature sausages that have become family favourites, 
              discover why thousands across Malawi choose Ekhaya for quality that is never kept waiting on a shelf.
            </p>
            {/* Optional Badge */}
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
              alt="Ekhaya Meats Hero"
              fill
              className="object-cover brightness-90 drop-shadow-[0_0_30px_rgba(212,175,55,0.7)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#D4AF37]">
            Our Products
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={cardVariant}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
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
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-center mb-2">{product.name}</h3>
                  <p className="text-gray-700 text-center text-sm">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
