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
              The Home of Freshness
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Built on quality, driven by your needs.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Ekhaya Meat is a quality-focused meat processor and professional
              butchery service based in Blantyre, supplying farm-fresh meat to
              households, retailers, hotels, restaurants, and food service
              partners across Malawi.
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
              src="/images/meat/about-image.png"
              alt="Ekhaya Meat Facility"
              fill
              className="object-cover brightness-90"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">
              Who We Are
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              At Ekhaya Meat, we believe that every meal deserves to start with
              the finest quality ingredients. That’s why we’ve dedicated
              ourselves to providing Malawian households and businesses with
              meat they can trust.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              From our facility in Blantyre, we serve customers across the
              country with a commitment to freshness, quality, and reliability.
              We don’t just supply meat – we deliver peace of mind.
            </p>
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
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
                From Carcass to Customer
              </h2>
              <h3 className="text-xl font-semibold mb-6">
                Expert Cutting and Fresh Meat Preparation
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-4">
                Our process begins when fresh carcasses arrive from the
                abattoir. Skilled butchers then transform them into premium
                cuts and fresh meat, tailored to customer specifications.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Trimming is performed primarily on upper carcass sections,
                overseen by a supervisor to ensure consistent quality. Each
                production run averages 100 trays of fresh cuts – approximately
                45 kg of premium meat.
              </p>
            </div>

            <div className="relative h-[360px] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
              <Image
                src="/images/butcher-image.png"
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
                src="/images/production-image.png"
                alt="Processed Meat Production"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
                Processed Meats That Set Us Apart
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed mb-4">
                Selected meat cuts move into our production facility where
                they’re transformed into sausages, Viennas, polonies, corned
                beef, and smoked meats using controlled processes.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                All products undergo cold storage before vacuum or tray
                packaging, locking in freshness and ensuring food safety before
                delivery.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= PRODUCT RANGE ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#D4AF37] mb-20">
            Quality You Can Trust
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show"
              className="bg-white border border-[#D4AF37] rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Farm Fresh and Locally Sourced
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                We partner with trusted local farmers who raise livestock
                responsibly, delivering fresh, natural, flavourful meat.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show"
              className="bg-white border border-[#D4AF37] rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Order Driven Production
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                We prepare what you order, when you order it no contracts,
                no hidden terms, just honest quality.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show"
              className="bg-white border border-[#D4AF37] rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Serving Malawi
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                From family meals to full restaurant kitchens, we serve
                Malawi’s diverse needs with the same care and attention.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
