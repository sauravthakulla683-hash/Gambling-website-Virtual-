import React from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import EarnCoins from "./components/Help";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Trending />
      <EarnCoins />
      <Footer />
    </div>
  );
};

export default App;
