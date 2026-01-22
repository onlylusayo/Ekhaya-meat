"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "PRODUCTS", href: "/product" },
  { name: "ABOUT US", href: "/us" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-6">

        {/* LOGO as HOME LINK */}
        <Link href="/">
          <Image
            src="/images/yeni-logo.png"
            alt="Ekhaya Meat Logo"
            width={100}
            height={105}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-semibold pb-2
                ${
                  isActive(link.href)
                    ? "text-white after:w-full"
                    : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                }
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-[#D4AF37]
                after:transition-all
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-[#D4AF37] rounded-md gap-1"
        >
          <span className={`w-6 h-0.5 bg-white transition ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* FLOATING MOBILE MENU (NO LAYOUT IMPACT) */}
      {mobileOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#D4AF37] shadow-lg lg:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-white font-semibold tracking-wide
                    ${isActive(link.href) ? "border-b-2 border-white" : ""}
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
