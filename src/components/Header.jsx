import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  // Change header style after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isActive
          ? "bg-white/5 backdrop-blur-md py-4 shadow-[0_10px_30px_rgba(0,255,255,0.08)]"
          : "bg-transparent py-6"
      } fixed w-full z-10 lg:px-8 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Brand logo */}
        <Link to="/">
          <div className="w-[70px] h-[70px] bhusan-mart">
            <img src={Logo} alt="Bhusan TechMart" />
          </div>
        </Link>

        <div className="flex items-center gap-6">
          {/* Auth actions (desktop only) */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-white/80">
                  Welcome,&nbsp;
                  <span className="text-cyan-400 font-medium">
                    {user.username}
                  </span>
                </span>

                <button
                  onClick={logout}
                  className="uppercase text-sm font-semibold
                             px-4 py-1 rounded-full
                             bg-white/5 border border-white/10
                             text-cyan-400
                             hover:bg-cyan-400 hover:text-black
                             transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="uppercase text-sm font-medium text-white/80
                             hover:text-cyan-400 transition"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="uppercase text-sm font-semibold
                             px-4 py-2 rounded-full
                             border border-cyan-400 text-cyan-400
                             hover:bg-cyan-400 hover:text-black
                             transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Cart icon with item count */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl text-white" />
            <div
              className="bg-cyan-500 absolute -right-2 -bottom-2
                         text-[12px] w-[18px] h-[18px]
                         text-black rounded-full
                         flex justify-center items-center"
            >
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
