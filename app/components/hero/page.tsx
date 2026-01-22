import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[url('/images/hero-picture.png')] bg-cover bg-center bg-no-repeat pt-24">
      
      {/* Overlay ONLY inside hero */}
      <div className="absolute inset-0 bg-[#121212]/80 z-0"></div>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-[calc(100vh-6rem)] px-4">
        
        {/* Brand name – Gold */}
        <p className="uppercase tracking-[6px] text-sm md:text-base font-semibold text-white mb-4">
          Ekhaya Meats
        </p>

        {/* Main headline – Gold */}
        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight text-white drop-shadow-2xl">
          Premium <br />
          <span className="text-[#D4AF37]">Quality Meat</span>
        </h1>

        {/* Supporting text – Black */}
        <p className="mt-6 max-w-2xl text-base md:text-lg text-white leading-relaxed">
          Carefully selected cuts, expertly handled and delivered fresh.
          Ekhaya Meats brings you world class meat with uncompromising quality.
        </p>
      </section>
    </div>
  );
};

export default Hero;
