"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* Motion Variant */
const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function ContactUsPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Contact Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-8">
              Contact Ekhaya Meats
            </h1>

            <div className="space-y-6 text-lg text-gray-200">
              <p>
                <span className="font-semibold text-[#D4AF37]">Location:</span>{" "}
                Gateway Mall, Blantyre, Malawi
              </p>

              <p>
                <span className="font-semibold text-[#D4AF37]">Phone / WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/265XXXXXXXXX"
                  target="_blank"
                  className="underline hover:text-[#D4AF37]"
                >
                  +265 XXX XXX XXX
                </a>
              </p>

              <p>
                <span className="font-semibold text-[#D4AF37]">Email:</span>{" "}
                info@ekhayameats.com
              </p>
            </div>

            <div className="mt-10 text-lg text-gray-300">
              <p className="font-semibold text-[#D4AF37] mb-2">
                Working Hours
              </p>
              <p>Tuesday – Friday</p>
              <p>08:00 AM – 05:00 PM</p>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="relative h-[260px] md:h-[320px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/contact-placeholder.jpg"
              alt="Ekhaya Meats Location"
              fill
              className="object-cover brightness-90"
            />
          </motion.div>

        </div>
      </section>

    </main>
  );
}
