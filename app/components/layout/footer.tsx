"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  const handleEmailClick = () => {
    if (typeof window !== "undefined") {
      const email = "info@ekhayameat.com"
      const subject = "Enquiry from Ekhaya Meats Website"
      const body = "Hello Ekhaya Meats,%0D%0A%0D%0A"

      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    }
  }

  return (
    <footer className="bg-black text-white pt-16 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/yeni-logo.png"
              alt="Ekhaya Meat Logo"
              width={120}
              height={105}
              className="object-contain"
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted source for fresh, premium quality meats.
            We deliver excellence straight from the farm to your table.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6">
            <a className="p-2 bg-white/10 rounded-full hover:bg-[#D4AF37] transition cursor-pointer">
              <FaFacebookF size={18} />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-[#D4AF37] transition cursor-pointer">
              <FaInstagram size={18} />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-[#D4AF37] transition cursor-pointer">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/product" className="hover:text-white">Products</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">Products</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Beef</li>
            <li>Mutton</li>
            <li>Goat</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Malawi, Chikwawa</li>
            <li>+265 988 966 020</li>
            <li>
              <span
                onClick={handleEmailClick}
                className="cursor-pointer hover:text-[#D4AF37] transition"
              >
                info@ekhayameat.com
              </span>
            </li>
            <li>Open: Mon – Fri (8AM – 6PM)</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Ekhaya Meat. All Rights Reserved. Powered by KETASE Tech
      </div>
    </footer>
  )
}
