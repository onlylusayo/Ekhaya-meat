"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* Animations */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

/* Meat cuts images */
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

/* Categories with cuts */
const categories = [
  {
    id: "cattle",
    name: "Cattle",
    description: "Experience the bold, hearty flavor of our premium beef.",
    image: "/images/o1.png",
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
    id: "sheep",
    name: "Sheep",
    description: "Indulge in the rich, succulent taste of our sheep meat.",
    image: "/images/o2.png",
    cuts: ["Lamb caras", "Loin chops", "Lamb legs", "Lamb Stew", "Lamb shanks", "Lamb neck"],
  },
  {
    id: "goat",
    name: "Goat",
    description: "Discover the robust, authentic taste of our goat meat.",
    image: "/images/o-goat.png",
    cuts: ["Goat carcass", "Goat stew", "Loin chops", "Goat legs", "Ribs", "Neck"],
  },
];

export default function MethodsSection() {
  const buttonClass =
    "px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition-colors duration-300";

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const cutsRef = useRef<HTMLDivElement | null>(null);

  const handleView = (categoryId: string) => {
    setExpandedCategory(categoryId);
    setTimeout(() => {
      cutsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Section Title ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c0c0c]">
            Our Meat Categories
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
            Carefully selected livestock, professionally processed and prepared
            to meet both retail and hospitality standards.
          </p>
        </div>

        {/* ===== Category Cards ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariant}
              className="group relative rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl transition flex flex-col items-center p-8"
            >
              {/* View All Cuts button ABOVE last card */}
              {index === categories.length - 1 && (
                <div className="absolute -top-16 right-0">
                  <Link href="/meat-cuts" className={buttonClass}>
                    View All Cuts
                  </Link>
                </div>
              )}

              <Image
                src={category.image}
                alt={category.name}
                width={120}
                height={80}
                className="mb-6 object-contain"
              />

              <h3 className="text-2xl font-bold text-center mb-3">
                {category.name}
              </h3>

              <p className="text-gray-700 text-center mb-6 text-lg">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Meat Cuts Preview ===== */}
        {expandedCategory &&
          categories
            .filter((cat) => cat.id === expandedCategory)
            .map((cat) => (
              <div key={cat.id} ref={cutsRef} className="mt-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-[#0c0c0c]">{cat.name} Meat Cuts</h2>
                  <Link href="/meat-cuts" className={buttonClass}>
                    View All Cuts
                  </Link>
                </div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {cat.cuts.map((cut) => (
                    <motion.div
                      key={cut}
                      variants={cardVariant}
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
                        <p className="text-gray-700 text-center text-base">
                          {cat.name} premium cut
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}

        {/* ===== Our Methods Section ===== */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 px-4 gap-10 items-center">
          <div>
            <span className="text-sm text-[#D4AF37] tracking-widest font-semibold">
              OUR METHODS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0c0c0c] mt-4 leading-tight">
              Pasture Raised <br /> Promise
            </h2>

            <p className="italic text-gray-800 mt-3 text-lg">
              Animal welfare is of the utmost importance to us.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed text-lg">
              That’s why we only work with farms and processors that share our
              passion for good animal husbandry. We promise every animal has been
              raised on lush pastures naturally, without hormones or antibiotics.
            </p>

            <div className="mt-6">
              <Link href="/methods" className={buttonClass}>
                Our Process
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[400px]">
            <Image
              src="/images/our-m.jpg"
              alt="Pasture raised farming"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
