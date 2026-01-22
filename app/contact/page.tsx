"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "265988966020";
  const whatsappMessage =
    "Hello Ekhaya Meats, I would like to place an order. Please assist me with available cuts and pricing.";

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center">
      
      {/* Sliding Panel */}
      <motion.section
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full md:w-1/2 min-h-screen bg-black border-r border-[#D4AF37] flex items-center px-8 md:px-14"
      >
        <div className="max-w-md text-white">

          {/* Title */}
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-6">
            Contact Us
          </h1>

          {/* Hours */}
          <div className="space-y-4 text-gray-200 text-base leading-relaxed">
            <p>
              <span className="font-semibold text-white">
                Monday – Friday:
              </span>{" "}
              07:30 – 17:00
            </p>

            <p>
              <span className="font-semibold text-white">
                Saturday:
              </span>{" "}
              07:30 – 15:00
            </p>

            <p>
              <span className="font-semibold text-white">
                Public Holidays:
              </span>{" "}
              07:30 – 12:30
            </p>

            <p>
              <span className="font-semibold text-white">
                Sundays:
              </span>{" "}
              Closed
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#D4AF37]/40 my-8" />

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-black font-semibold rounded-full hover:opacity-90 transition"
          >
            <MessageCircle size={22} />
            Order via WhatsApp
          </a>

          {/* Phone Number */}
          <p className="mt-4 text-gray-400 text-sm">
            Or call us on <span className="text-white">+265 988 96 60 20</span>
          </p>
        </div>
      </motion.section>
    </div>
  );
}
