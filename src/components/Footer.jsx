import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative isolate
        bg-gradient-to-b from-[#0f1624] to-[#0a0e17]
        overflow-hidden
      "
    >
      {/* Thin separator to visually detach footer from page content */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 z-20" />

      {/* Decorative glow effect anchored to the bottom */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-[160px]
          bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30
          blur-[100px]
          pointer-events-none
          z-0
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand info and social presence */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 transition">
            <img
              src="/image/logo.png"
              alt="Bhusan Mart"
              className="mx-auto w-40 mb-4"
            />

            <p className="text-sm text-white/70">
              Your destination for cutting-edge gadgets.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaYoutube,
                FaLinkedinIn,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="
                    w-11 h-11 rounded-xl flex items-center justify-center
                    bg-white/10 text-white text-lg
                    hover:bg-cyan-500 hover:shadow-[0_0_15px_#22d3ee]
                    transition cursor-pointer
                  "
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Quick navigation links */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition flex flex-col gap-6">
            <div className="flex justify-between gap-10">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Shop</h3>
                {["All Products", "Mobiles", "Laptops", "Accessories"].map(
                  (item) => (
                    <p
                      key={item}
                      className="
                        text-white/70 text-sm mb-2
                        hover:text-orange-400 hover:translate-x-1
                        transition cursor-pointer
                      "
                    >
                      {item}
                    </p>
                  )
                )}
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-4">About</h3>
                {["About Us", "Contact", "Careers", "Press"].map((item) => (
                  <p
                    key={item}
                    className="
                      text-white/70 text-sm mb-2
                      hover:text-orange-400 hover:translate-x-1
                      transition cursor-pointer
                    "
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <img
              src="/image/card2.png"
              alt="Bhusan Mart Store"
              className="w-[170px] mx-auto mt-2 opacity-90 hover:opacity-100 transition"
            />
          </div>

          {/* Newsletter subscription section */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-white text-lg font-semibold mb-3">
              JOIN NEWSLETTER
            </h3>

            <p className="text-white/70 text-sm mb-5">
              Get exclusive offers & early product access.
            </p>

            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="
                  h-[48px] w-full max-w-[220px] px-4 rounded-xl
                  bg-white/10 border border-white/20
                  text-white placeholder-white/40
                  outline-none focus:border-cyan-400
                "
              />

              <button
                className="
                  h-[48px] w-[100px] shrink-0 rounded-xl
                  font-semibold text-black text-sm
                  bg-gradient-to-r from-orange-500 to-orange-400
                  shadow-[0_0_18px_rgba(255,120,70,0.75)]
                  hover:scale-105 transition
                "
              >
                Subscribe
              </button>
            </div>

            <img
              src="/image/card.png"
              alt="Bhusan Mart Preview"
              className="w-40 mx-auto mt-6"
            />
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-white/60">
          <span className="text-orange-400 font-semibold">Bhusan Mart</span> ~
          Designed with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/biswabhusanmohapatra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-yellow-300 transition font-medium"
          >
            Shivam Gaikwad
          </a>
          <div className="flex justify-center gap-8 mt-4">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <span
                key={item}
                className="hover:text-orange-400 cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
