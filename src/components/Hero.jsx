import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20 overflow-hidden">
      {/* Decorative animated overlay for visual depth */}
      <div className="absolute inset-0 neon-motion pointer-events-none"></div>

      <div className="relative container mx-auto flex justify-around h-full z-10">
        <div className="flex flex-col justify-center max-w-[1200px]">
          {/* Small accent label above main heading */}
          <div className="font-semibold flex items-center uppercase mb-6 animate-fadeInUp delay-100">
            <div className="w-10 h-[2px] mr-3 bg-cyan-500"></div>
            Tech Trends
          </div>

          {/* Primary hero heading */}
          <h1
            className="uppercase font-semibold tracking-[0.05em] leading-[1.1] mb-6
                       text-[40px] sm:text-[48px] md:text-[60px] lg:text-[70px]
                       animate-fadeInUp delay-200"
          >
            Designed for Tomorrow
          </h1>

          {/* Supporting tagline */}
          <p
            className="uppercase font-light tracking-wide opacity-70
                       text-[18px] sm:text-[20px] md:text-[22px]
                       animate-fadeInUp delay-300"
          >
            Premium technology. Timeless performance.
          </p>

          {/* Call-to-action link */}
          <Link
            to={"/"}
            className="self-start mt-8 uppercase font-semibold
                       text-cyan-400 border-b border-cyan-400 pb-1
                       hover:text-cyan-300 hover:border-cyan-300
                       transition-all duration-300
                       animate-fadeInUp delay-500"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
