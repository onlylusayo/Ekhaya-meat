"use client"

import Image from "next/image"

const BoxFeature = () => {
  return (
    <section className="bg-amber-30/70 py-20 px-4 md:py-32 relative overflow-hidden">

      {/* --- Background Floating Images --- */}
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-50 hidden md:block rounded-xl overflow-hidden">
        <Image
          src="/images/meat/IMG_2895.JPG"
          alt="Garlic sketch"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-50 hidden md:block rounded-xl overflow-hidden">
        <Image
          src="/images/meat/IMG_2905.JPG"
          alt="Deer sketch"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="absolute top-1/4 right-20 w-32 h-32 opacity-50 hidden md:block rounded-2xl overflow-hidden">
        <Image
          src="/images/meat/IMG_2909.JPG"
          alt="Rosemary sketch"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* --- Main Content --- */}
      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Header Icon */}
        <div className="flex justify-center mb-4 text-2xl text-[#D4AF37]">
          &#10049;
        </div>

        <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-12">
          The Ekhaya Experience
        </h2>

        {/* Main Image */}
        <div className="relative w-full max-w-xl mx-auto h-80 mb-16 rounded-2xl overflow-hidden">
          <Image
            src="/images/meat/IMG_2897.JPG"
            alt="Ekhaya Meats premium delivery box"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Premium Cuts, Carefully Selected
            </h3>
            <p className="text-sm text-gray-600">
              At Ekhaya Meats, every cut is chosen for tenderness, flavor, and
              freshness ensuring your meals start with the finest quality.
            </p>
          </div>

          <div className="hidden md:block"></div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Farm Fresh and Locally Sourced
            </h3>
            <p className="text-sm text-gray-600">
              We partner with trusted local farmers who raise livestock
              responsibly, bringing you meat that is fresh, natural, and
              full of flavor.
            </p>
          </div>

          <div className="md:col-start-2 text-center mt-8 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quality You Can Trust
            </h3>
            <p className="text-sm text-gray-600">
              No contracts, no hidden terms just reliable service,
              honest quality, and meat delivered the way it should be.
            </p>
          </div>

        </div>
      </div>

      {/* Decorative Dashed Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
        <svg width="100%" height="100%">
          <path
            d="M 40% 45% C 30% 30%, 30% 60%, 25% 65%"
            stroke="#b8860b"
            strokeDasharray="5,5"
            fill="none"
          />
          <path
            d="M 60% 45% C 70% 30%, 70% 60%, 75% 65%"
            stroke="#b8860b"
            strokeDasharray="5,5"
            fill="none"
          />
          <path
            d="M 50% 45% C 50% 60%, 45% 75%, 50% 85%"
            stroke="#b8860b"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>
      </div>

    </section>
  )
}

export default BoxFeature
