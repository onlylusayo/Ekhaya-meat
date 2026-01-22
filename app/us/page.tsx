"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* Motion Variants */
const textVariant = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function AboutUsPage() {
  const buttonClass =
    "px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition-colors duration-300";

  /* Sections Data */
  const processSteps = [
    {
      title: "Sausage Production and Batch Processing",
      description:
        "Our focus is on high-quality sausage production with batch outputs exceeding 12,500 units. Spices are carefully added during the mixing stage using specialized machinery. Multiple batches can be processed simultaneously, ensuring efficiency without compromising taste.",
      image: "/images/sausage-production.jpg",
    },
    {
      title: "Hungarian Product Specialization",
      description:
        "Hungarian products receive specialized treatment including a two-hour oven process followed by a cooling period. Products are packaged the following day in bags or containers and stored separately in dedicated freezer rooms. This ensures that spice-enhanced products maintain their premium quality and flavor.",
      image: "/images/hungarian-products.jpg",
    },
    {
      title: "Supply Chain and Butchery Services",
      description:
        "Our order-based system ensures precise farm coordination. Products are identified by names such as Simon Bear, Doctor, Blake, Chan, Silver Star, and Palm. From farm to abattoir, meat processing, and production, we ensure every step is carefully managed. We also provide specialized butchery services, creating custom cuts for hotels and individual clients according to their specifications.",
      image: "/images/supply-chain.jpg",
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full relative bg-black py-36 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about-hero.jpg"
              alt="Ekhaya Meats Hero"
              fill
              className="object-cover brightness-90 drop-shadow-[0_0_30px_rgba(212,175,55,0.7)]"
            />
          </motion.div>

          {/* Hero Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-6 leading-tight">
              About Ekhaya Meats
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-6">
              At Ekhaya Meats we combine passion, precision, and care to deliver premium meat products.
              Our philosophy is centered on quality from farm to table. We specialize in Hungarian sausages,
              chicken polonies, corned beef, and a wide range of products tailored to our clients' needs.
            </p>
            <p className="text-gray-200 text-lg md:text-xl mb-6">
              Every step in our production is meticulously monitored. From spice blending, batch processing,
              to packaging and storage, we uphold the highest standards. We also provide specialized butchery
              services for hotels, restaurants, and individual clients, ensuring every cut meets specific requirements.
            </p>
            <button className={buttonClass}>Learn More</button>
          </motion.div>
        </div>
      </section>

      {/* Production Process Steps */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#D4AF37]">
            Our Production Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-center text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain and Documentation */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#D4AF37]">Supply Chain and Butchery Services</h2>
          <p className="text-gray-800 text-lg mb-4">
            Our supply chain is designed for precision and transparency. Products are tracked from farm to abattoir, then to meat processing and packaging.
            Dedicated naming conventions and order-based coordination ensure every batch meets client specifications.
          </p>
          <p className="text-gray-800 text-lg mb-4">
            Butchery services are customized to meet the needs of hotels, restaurants, and individual clients.
            We handle specialized cuts, custom orders, and ensure direct communication for client specifications.
          </p>
          <p className="text-gray-800 text-lg mb-4">
            Our commitment to quality extends to documentation, with ongoing efforts to showcase operations and processes through photos and website updates.
          </p>
        </div>
      </section>
    </main>
  );
}
