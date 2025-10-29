import React from "react";
import { pics } from "../images/assests";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="relative flex flex-col  md:flex-row justify-around items-center h-[48rem]  max-md:h-[34rem] w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1)_0%,_transparent_70%)]"></div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center md:text-left max-w-md z-10"
      >
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-lg"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          ⚡ Fast Games Real Fun Endless Wins.
        </h1>

        <p className="text-gray-300 mt-4 text-lg font-light">
          Play. Compete. Win coins. Repeat. 🚀
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="mt-10 max-md:hidden z-10"
      >
        <motion.img
          src={pics.logo}
          alt="Logo"
          className="w-44 h-44 rounded-2xl mx-auto shadow-2xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Intro;
