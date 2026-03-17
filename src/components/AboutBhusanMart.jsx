import React from "react";
import aboutImg from "/image/ecompost.png";

const AboutBhusanMart = () => {
  return (
    <section
      className="
        relative pt-44 pb-32
        bg-[#05010f]
        overflow-hidden
        before:absolute before:inset-0
        before:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
                   linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        before:bg-[size:40px_40px]
        before:opacity-20
      "
    >
      {/* Decorative top divider */}
      <div
        className="absolute top-0 left-0 w-full h-[1px] 
                   bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />

      {/* Ambient background glow */}
      <div
        className="absolute inset-0 bg-gradient-to-br 
                   from-cyan-500/10 via-transparent to-fuchsia-600/10"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-cyan-400">Bhusan Mart</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bhusan Mart is committed to delivering premium gadgets, trusted
            service, and a seamless shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
          {/* Feature list (left) */}
          <div className="space-y-14 text-right">
            {[
              {
                num: "1",
                title: "Wide Selection",
                desc: "A diverse range of gadgets from smartphones to smart home devices.",
              },
              {
                num: "2",
                title: "Quality Assurance",
                desc: "Every product undergoes strict quality checks for reliability.",
              },
              {
                num: "3",
                title: "Competitive Prices",
                desc: "Premium technology at affordable and transparent pricing.",
              },
            ].map((item) => (
              <div key={item.num} className="group">
                <div className="flex items-center justify-end gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-cyan-300 transition">
                    {item.title}
                  </h3>

                  <span
                    className="
                      w-11 h-11 rounded-full
                      bg-cyan-400/20 text-cyan-300
                      ring-1 ring-cyan-400/40
                      flex items-center justify-center
                      font-semibold
                    "
                  >
                    {item.num}
                  </span>
                </div>

                <p className="text-gray-300 max-w-sm ml-auto leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center visual highlight */}
          <div className="flex justify-center">
            <div className="relative group transition-all duration-700 ease-out">
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-tr from-cyan-400/40 to-fuchsia-500/40
                  blur-[140px] opacity-60
                  transition-all duration-700 ease-out
                  group-hover:blur-[90px]
                  group-hover:opacity-90
                "
              />

              <img
                src={aboutImg}
                alt="Bhusan Mart"
                className="
                  relative z-10 max-w-sm w-full
                  drop-shadow-[0_0_50px_rgba(56,189,248,0.35)]
                  transform scale-110 translate-y-2
                  transition-all duration-700 ease-out
                  group-hover:scale-100
                  group-hover:translate-y-0
                "
              />
            </div>
          </div>

          {/* Feature list (right) */}
          <div className="space-y-14">
            {[
              {
                num: "4",
                title: "Expert Guidance",
                desc: "Professional advice to help you choose the right gadget.",
              },
              {
                num: "5",
                title: "Convenient Shopping",
                desc: "User-friendly interface with secure and fast checkout.",
              },
              {
                num: "6",
                title: "Excellent Service",
                desc: "Dedicated support ensuring customer satisfaction.",
              },
            ].map((item) => (
              <div key={item.num} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className="
                      w-11 h-11 rounded-full
                      bg-cyan-400/20 text-cyan-300
                      ring-1 ring-cyan-400/40
                      flex items-center justify-center
                      font-semibold
                    "
                  >
                    {item.num}
                  </span>

                  <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-cyan-300 transition">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-300 max-w-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBhusanMart;
