import React from "react";
import { Trophy, Gamepad2, PlayCircle } from "lucide-react"; // from lucide-react (Tailwind icons)

const EarnCoins = () => {
  const ways = [
    {
      title: "Play Games",
      desc: "Win matches, complete challenges, and earn virtual coins every time you play!",
      icon: <Gamepad2 className="w-12 h-12 text-yellow-500" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Watch Ads",
      desc: "Earn bonus coins by watching short sponsored videos. Quick and easy rewards!",
      icon: <PlayCircle className="w-12 h-12 text-green-500" />,
      color: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 bg-gray-100">
      <h2
        className="text-4xl font-extrabold mb-10 text-gray-900"
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
      >
        💰 How to Earn Coins
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 w-full max-w-5xl">
        {ways.map((way, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition-all duration-300 border-t-4 bg-gradient-to-b ${way.color}`}
          >
            <div className="bg-white rounded-full p-4 shadow-md mb-4">
              {way.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {way.title}
            </h3>
            <p className="text-gray-600 text-sm">{way.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-lg font-semibold text-gray-700">
        <Trophy className="inline w-6 h-6 text-yellow-500 mr-2" />
        Keep earning — climb the leaderboard and unlock rewards!
      </div>
    </div>
  );
};

export default EarnCoins;
