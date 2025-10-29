import React from "react";
import { pics } from "../images/assests";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={pics.logo}
            alt="Betly Logo"
            className="w-16 h-16 mb-3 rounded-lg"
          />
          <h2
            className="text-2xl font-bold text-yellow-400 tracking-wide"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Betly
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Play. Win. Earn. — your go-to destination for fun games and virtual
            rewards!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-400 cursor-pointer">Games</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Leaderboard
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Earn Coins</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-end gap-5 text-yellow-400">
            <Facebook className="w-6 h-6 hover:scale-110 transition" />
            <Instagram className="w-6 h-6 hover:scale-110 transition" />
            <Twitter className="w-6 h-6 hover:scale-110 transition" />
            <Youtube className="w-6 h-6 hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 my-8"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Betly. All Rights Reserved.
        <span className="block md:inline md:ml-2">
          Made with ❤️ for gamers.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
