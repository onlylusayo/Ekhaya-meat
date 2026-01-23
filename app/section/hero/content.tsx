// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// /* ================= Animations ================= */

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.15 } },
// };

// const cardVariant = {
//   hidden: { y: 40, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
// };

// /* ================= Categories ================= */

// const categories = [
//   {
//     id: "cattle",
//     name: "Cattle",
//     description: "Bold, hearty flavour from expertly raised premium beef.",
//     image: "/images/o1.png",
//   },
//   {
//     id: "sheep",
//     name: "Sheep",
//     description: "Rich, succulent sheep meat prepared to the highest standards.",
//     image: "/images/o2.png",
//   },
//   {
//     id: "goat",
//     name: "Goat",
//     description: "Authentic goat meat with a deep, distinctive taste.",
//     image: "/images/o-goat.png",
//   },
// ];

// /* ================= Component ================= */

// export default function MeatCategoriesSection() {
//   const buttonClass =
//     "px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition";

//   return (
//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* ===== Title ===== */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0c0c0c]">
//             Our Meat Categories
//           </h2>
//           <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
//             Carefully selected livestock, professionally processed for premium quality.
//           </p>
//         </div>

//         {/* ===== Category Cards ===== */}
//         <motion.div
//           className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           {/* View All Cuts */}
//           <div className="absolute -top-16 right-0">
//             <Link href="/meat-cuts" className={buttonClass}>
//               View All Cuts
//             </Link>
//           </div>

//           {categories.map((category) => (
//             <motion.div
//               key={category.id}
//               variants={cardVariant}
//               className="rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
//             >
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={120}
//                 height={80}
//                 className="mb-6 object-contain"
//               />

//               <h3 className="text-2xl font-bold mb-3">
//                 {category.name}
//               </h3>

//               <p className="text-gray-700 text-lg">
//                 {category.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ================= Animations ================= */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

/* ================= Services ================= */

const services = [
  {
    id: "fresh-cuts",
    headline: "Premium Fresh Cuts",
    description: `Expert butchery delivering beef, mutton, and goat cuts prepared to your exact specifications. From everyday meals to special occasions – cut fresh when you order.`,
    image: "/images/fresh-cuts.png", // replace with your image path
    link: "/products",
    buttonText: "View Products",
  },
  {
    id: "processed-meats",
    headline: "Signature Processed Meats",
    description: `Our specialty sausages, Vienna, polony, and smoked meats crafted in our Blantyre facility. Traditional flavours, modern quality, produced fresh for your order.`,
    image: "/images/processed-meats.png", // replace with your image path
    link: "/products",
    buttonText: "View Products",
  },
];

/* ================= Component ================= */

export default function MeatLandingSections() {
  const buttonClass =
    "px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition";

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Intro Section (Below Hero) ===== */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c0c0c] mb-6">
            Proudly Malawian. Uncompromisingly Fresh.
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Every meal deserves to start with meat you can trust. That's why we've built our reputation on one simple promise: quality that never compromises. From the moment livestock arrives at our facility to the second your order is vacuum-sealed and ready for delivery, we uphold strict local and international safety standards that guarantee freshness, flavour, and hygiene in every cut.`}
          </p>
          <p className="text-gray-700 text-lg">
            {`Whether you're preparing Sunday lunch for your family, stocking your retail shelves, or running a busy hotel kitchen, Ekhaya Meat delivers the same unwavering commitment  safe, high-quality products made fresh for your order. No guesswork. No waiting. Just premium Malawian meat, prepared exactly when you need it. See what we offer.`}
          </p>
        </div>

        {/* ===== Our Services Section ===== */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0c0c0c] mb-2">
            What We Offer
          </h3>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {`Two specialised services working together to deliver the freshest quality  made to order, every time.`}
          </p>
        </div>

        {/* ===== Services Cards Grid (2 Cards) ===== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariant}
              className="rounded-2xl border border-[#D4AF37] bg-white shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
            >
              <Image
                src={service.image}
                alt={service.headline}
                width={120}
                height={80}
                className="mb-6 object-contain"
              />
              <h4 className="text-2xl font-bold mb-3">{service.headline}</h4>
              <p className="text-gray-700 text-lg mb-4">{service.description}</p>
              <Link href={service.link} className={buttonClass}>
                {service.buttonText}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
