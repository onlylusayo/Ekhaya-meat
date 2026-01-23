"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle } from "lucide-react";

/* ================= Animations ================= */
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

/* ================= Component ================= */
export default function ContactPage() {
  const whatsappNumber = "265988966020";
  const whatsappMessage =
    "Hello Ekhaya Meats, I would like to place an order. Please assist me with available cuts and pricing.";

  return (
    <section className="min-h-screen bg-black flex">

      {/* ===== Left: Contact Details ===== */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex items-center pl-16 md:pl-24"
      >
        <div className="max-w-md text-white">

          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-12">
            Contact Us
          </h1>

          <div className="space-y-4 text-white text-lg">
            <p><span className="font-semibold">Monday – Friday:</span> 07:30 – 17:00</p>
            <p><span className="font-semibold">Saturday:</span> 07:30 – 15:00</p>
            <p><span className="font-semibold">Public Holidays:</span> 07:30 – 12:30</p>
            <p><span className="font-semibold">Sundays:</span> Closed</p>
          </div>

          <div className="w-full h-px bg-[#D4AF37]/40 my-10" />

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-black font-semibold rounded-full hover:opacity-90 transition"
          >
            <MessageCircle size={22} />
            Order via WhatsApp
          </a>

          <p className="mt-6 text-white text-sm">
            Or call us on{" "}
            <span className="font-semibold text-white">+265 988 96 60 20</span>
          </p>
        </div>
      </motion.div>

      {/* ===== Right: Map ===== */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden md:flex w-1/2 justify-center items-center px-8"
      >
        <div className="w-full max-w-2xl h-96 border border-[#D4AF37] rounded-lg overflow-hidden">
          <iframe
            title="Ekhaya Meats Location"
            src="https://www.google.com/maps?q=Blantyre,Malawi&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
