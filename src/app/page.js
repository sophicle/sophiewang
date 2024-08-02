import React from "react";
import Scroll from "./modules/ScrollContainer.js";
import Links from "./modules/Links";
import "./globals.css";

const Home = () => {
  return (
    <div className="h-full flex flex-col md:flex-row pt-40">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <img
          src="./sophie.svg"
          className="w-4/5 max-w-md mb-12 object-contain"
          alt="Sophie Wang"
        />
        <Links />
      </div>
      <div className="w-full h-full lg:w-1/2">
        <Scroll />
      </div>
    </div>
  );
};

export default Home;
