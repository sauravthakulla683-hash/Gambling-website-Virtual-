import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white items-center">
      <h1>Gambling</h1>
      <div>
        <li>Games</li>
        <li>LeaderBoard</li>
        <li>About</li>
      </div>
    </div>
  );
};

export default Nav;
