import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { heropic } from "../assets";
import { fadeIn } from "../utils/motion";

const HeroPic = () => {
  return (
    <Tilt className="lg:block hidden">
      <div className="block w-[490px] rounded-full green-pink-gradient p-[2.5px] shadow-card">
        <img
          src={heropic}
          alt="heropic"
          className="rounded-full object-contain w-[490px] h-[490px] bg-black-100"
        />
      </div>
    </Tilt>
  );
};

export default HeroPic;
