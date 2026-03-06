"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

/* Animations */

const textVariant = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const imageVariant = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const cardVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* Filters */

const filters = ["all", "products", "meat-cuts"];

/* Product Categories */

const productCategories = [
  {
    name: "Fresh Red Meat",
    products: [
      { name: "Beef", image: "/images/meat2.jpg" },
      { name: "Goat Meat", image: "/images/goat-leg.jpg" },
      { name: "Mutton", image: "/images/mutton-shoulder.jpg" },
    ],
  },
  {
    name: "Primary Meat Cuts",
    products: [
      { name: "Steak Cuts", image: "/images/meat/steak-cuts.jpg" },
      { name: "Brisket", image: "/images/brisket.jpg" },
      { name: "Chunks and Portions", image: "/images/chuck.jpg" },
      { name: "Boneless Cuts", image: "/images/meat/boneless.jpg" },
    ],
  },
  {
    name: "Processed Meat Products",
    products: [
      { name: "Breakfast Sausages", image: "/images/meat/Beef-Saus.JPG" },
      { name: "Cocktail Sausages", image: "/images/meat/cock-tail.jpg" },
      { name: "Hungarians", image: "/images/meat/hungarian-sausages.JPG" },
      { name: "Chicken Polonies", image: "/images/meat/c-polony.png" },
      { name: "Sliced Polonies", image: "/images/meat/Polony.WEBP" },
      { name: "Corned Beef", image: "/images/meat/corned-beef.JPG" },
      { name: "Beef Sausages", image: "/images/meat/Beef-Saus.JPG" },
    ],
  },
];

/* Meat Cuts */

const cutImages: Record<string, string> = {
  "shoulder-blend": "/images/meat/shoulder-blend.jpeg",
  "short-ribs": "/images/meat/short-ribs.jpeg",
  "topside-steak": "/images/meat/top-side.jpg",
  tbone: "/images/meat/t-bone.jpeg",
  fillet: "/images/meat/fillet.jpeg",
  ribeye: "/images/meat/rib-eye2.JPG",
  hump: "/images/meat/hump.JPG",
  "rump-steak": "/images/meat/Rump-steak.jpeg",
  "sirloin-steak": "/images/meat/sirlion-2.jpeg",
  "cut-beef": "/images/meat/Cut-beef.jpeg",

  "lamb-caras": "/images/meat/Lamb-Carcas.JPG",
  "loin-chops": "/images/meat/loin-chops.JPG",
  "lamb-legs": "/images/meat/lamb-leg.JPG",
  "lamb-stew": "/images/meat/lamp-stew.jpeg",
  "lamb-shanks": "/images/meat/lamp-shanks.jpeg",
  "lamb-neck": "/images/meat/necks.jpeg",

  "goat-carcass": "/images/meat/goat-carca.WEBP",
  "goat-legs": "/images/meat/g-leg.jpg",
  ribs: "/images/meat/ribs.jpg",
  neck: "/images/meat/goat-necks.JPG",
};

const meatCuts = [
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
      { id: "lamb-caras", label: "Lamb Carcass" },
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
      { id: "goat-legs", label: "Goat Legs" },
      { id: "ribs", label: "Ribs" },
      { id: "neck", label: "Neck" },
    ],
  },
];

export default function ProductsPage() {
  const productsRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <main className="w-full bg-white">

      {/* HERO SECTION */}

      <section className="relative w-full bg-black py-32 overflow-hidden">

        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-6 leading-tight">
              Premium Meats, Delivered Fresh
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mb-6">
              Carefully selected livestock, processed with strict hygiene
              standards to deliver high-quality fresh meat products.
            </p>

            <span className="inline-block mt-4 px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] font-semibold rounded-full text-sm">
              100% Order-Driven Production
            </span>
          </motion.div>

          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
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


      {/* FILTER BAR */}

      <section className="py-12 border-b">

        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-4 flex-wrap">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === filter
                  ? "bg-[#D4AF37] text-black"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {filter.replace("-", " ").toUpperCase()}
            </button>
          ))}

        </div>

      </section>


      {/* PRODUCTS */}

      {(activeFilter === "all" || activeFilter === "products") && (
        <section ref={productsRef} className="py-20">

          <div className="max-w-7xl mx-auto px-4 space-y-20">

            {productCategories.map((category) => (

              <div key={category.name}>

                <h2 className="text-4xl font-bold text-center text-[#D4AF37] mb-12">
                  {category.name}
                </h2>

                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="show"
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >

                  {category.products.map((product) => (

                    <motion.div
                      key={product.name}
                      variants={cardVariant}
                      className="rounded-xl overflow-hidden border border-[#D4AF37] shadow bg-white"
                    >

                      <div className="aspect-square">

                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover hover:scale-105 transition"
                        />

                      </div>

                      <div className="p-4 text-center">

                        <h3 className="font-semibold">
                          {product.name}
                        </h3>

                      </div>

                    </motion.div>

                  ))}

                </motion.div>

              </div>

            ))}

          </div>

        </section>
      )}


      {/* MEAT CUTS */}

      {(activeFilter === "all" || activeFilter === "meat-cuts") && (
        <section className="py-20 bg-gray-50">

          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-4xl font-bold text-center text-[#D4AF37] mb-16">
              Meat Cuts
            </h2>

            {meatCuts.map((category) => (

              <div key={category.name} className="mb-20">

                <h3 className="text-3xl font-bold text-center mb-10">
                  {category.name}
                </h3>

                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                  {category.cuts.map((cut) => (

                    <motion.div
                      key={cut.id}
                      variants={cardVariant}
                      className="rounded-2xl overflow-hidden border border-[#D4AF37] shadow bg-white"
                    >

                      <div className="aspect-square">

                        <Image
                          src={cutImages[cut.id]}
                          alt={cut.label}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />

                      </div>

                      <div className="p-5 text-center">

                        <h3 className="text-xl font-semibold">
                          {cut.label}
                        </h3>

                        <p className="text-gray-600 text-sm">
                          Premium {category.name} Cut
                        </p>

                      </div>

                    </motion.div>

                  ))}

                </motion.div>

              </div>

            ))}

          </div>

        </section>
      )}

    </main>
  );
}