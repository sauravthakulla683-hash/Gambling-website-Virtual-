import React, { useState } from "react";
import { pics } from "../images/assests";
import { motion } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg fixed w-full z-50"
      >
        {/* Left Side */}
        <div className="flex items-center space-x-3">
          <img
            src={pics.menu}
            onClick={() => setOpen(!open)}
            alt="menu icon"
            className="w-6 h-6 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer"
          />

          <h1
            className="text-2xl font-extrabold tracking-wide ml-2"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            BETLY
          </h1>
        </div>

        {/* Middle Navigation */}
        <ul className="hidden md:flex space-x-10 items-center text-lg font-semibold">
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            Games
          </li>
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            Leaderboard
          </li>
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            About
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-2 bg-yellow-500 px-3 py-1 rounded-lg text-black font-bold shadow-md hover:bg-yellow-400 transition duration-200 cursor-pointer">
            <span>💰</span> <span>1000</span>
          </div>
          <img
            src={pics.logo}
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-lg cursor-pointer hover:scale-110 transition duration-300"
          />
        </div>
      </motion.nav>

      {open && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          ></div>

          <Sidebar />
        </div>
      )}
    </>
  );
};

export default Nav;
