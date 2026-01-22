"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ---------------- Motion Variants ---------------- */
const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.9 } },
};

const fadeRight = {
  hidden: { x: 60, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.9 } },
};

export default function AboutUsPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-black pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-6">
              About Ekhaya Meats
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Ekhaya Meats is a professionally operated meat processing and butchery
              enterprise dedicated to supplying high quality fresh and processed
              meat products to both retail and hospitality markets in Malawi.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Our operations are built on structured production systems,
              disciplined quality control, and an integrated workflow between
              butchery and meat processing.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/about-hero-placeholder.jpg"
              alt="Ekhaya Meats Facility"
              fill
              className="object-cover brightness-90"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= BUTCHERY & PRODUCTION ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* Butchery */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">
                Butchery Operations
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed mb-4">
                The butchery forms the foundation of Ekhaya Meats operations.
                Livestock sourced through Ekhaya Abattoir
                is handled by trained personnel under strict hygiene standards.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Carcasses are divided into primary sections, trimmed, and cut
                according to professional standards and market requirements,
                ensuring consistency, yield optimization, and product quality.
              </p>
            </div>

            <div className="relative h-[360px] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
              <Image
                src="/images/butchery-placeholder.jpg"
                alt="Butchery Operations"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Production */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
          >
            <div className="relative h-[360px] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
              <Image
                src="/images/production-placeholder.jpg"
                alt="Meat Production"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">
                Production Operations
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed mb-4">
                The production facility focuses on value added processing of
                selected meat cuts. Products are prepared through controlled
                blending, seasoning, and specialized heat treatment processes.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Production activities are closely supervised to ensure food
                safety, consistency, and quality before controlled cooling,
                cold storage, and packaging.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= PRODUCT RANGE ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#D4AF37] mb-20">
            Product Range
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show"
              className="bg-white border border-[#D4AF37] rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Fresh Meat Cuts
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Premium cattle, sheep, and goat cuts including shoulder blends,
                short ribs, fillet, rib eye, sirloin, rump steak, lamb legs,
                lamb shanks, goat carcass, ribs, and neck cuts.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show"
              className="bg-white border border-[#D4AF37] rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Processed Products
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Hungarians, chicken polonies, sliced polonies, and corned beef,
                produced under controlled conditions for consistency and quality.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show"
              className="bg-white border border-[#D4AF37] rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Storage and Quality Control
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                All products undergo cold storage before packaging to preserve
                freshness and ensure compliance with food safety standards.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= DELIVERY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">
            Deliveries and Processing Cycle
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Meat deliveries are received twice weekly to support continuous
            processing and freshness, ensuring smooth coordination between
            butchery, production, storage, and packaging.
          </p>
        </div>
      </section>

    </main>
  );
}
