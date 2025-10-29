import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Trophy, User, Gamepad2, Menu } from "lucide-react";
import { pics } from "../images/assests";

const Sidebars = () => {
  const [open, setOpen] = useState(true); // toggle sidebar

  const links = [
    { name: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    { name: "Games", icon: <Gamepad2 className="w-5 h-5" />, path: "/games" },
    {
      name: "Leaderboard",
      icon: <Trophy className="w-5 h-5" />,
      path: "/leaderboard",
    },
    { name: "Profile", icon: <User className="w-5 h-5" />, path: "/profile" },
  ];

  return (
    <div
      className={`flex flex-col h-screen bg-gray-900 text-white transition-width duration-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      {/* Top: logo and toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {open && (
          <h1
            className="text-xl font-bold"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Betly
          </h1>
        )}
        <button
          className="p-1 rounded hover:bg-gray-800"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Coins / User Info */}
      {open && (
        <div className="flex flex-col items-center mt-6 mb-4">
          <img
            src={pics.logo}
            alt="logo"
            className="w-16 h-16 rounded-full shadow-lg mb-2"
          />
          <div className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-lg">
            💰 1000
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 px-2 mt-4 space-y-2">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            {link.icon}
            {open && <span className="font-semibold">{link.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Bottom Footer */}
      {open && (
        <div className="p-4 text-sm text-gray-400 border-t border-gray-700">
          © {new Date().getFullYear()} Betly
        </div>
      )}
    </div>
  );
};

export default Sidebars;
