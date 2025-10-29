import React from "react";
import { pics } from "../images/assests";
import { motion } from "framer-motion";

const Trending = () => {
  const games = new Array(10).fill(pics.logo);

  return (
    <div className="relative flex flex-col items-center py-12 overflow-hidden bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 h-[28rem]">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-wide drop-shadow-lg"
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
      >
        🚀 Trending Games
      </motion.h1>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...games, ...games].map((game, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="relative min-w-[12rem] h-[12rem] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 hover:shadow-yellow-400/40"
            >
              <img
                src={game}
                alt={`game-${i}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 bg-black/50 text-white text-center w-full py-1 text-sm font-semibold">
                Game {i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Trending;
