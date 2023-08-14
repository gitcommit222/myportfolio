import React from "react";
import Tilt from "react-parallax-tilt";

import { heropic } from "../assets";
import { slideIn } from "../utils/motion";

const HeroPic = () => {
  return (
    <Tilt>
      <div className=" w-[400px] rounded-full green-pink-gradient p-[2px] shadow-card">
        <img
          src={heropic}
          alt="heropic"
          className="rounded-full object-contain w-[400px] h-[400px"
        />
      </div>
    </Tilt>
  );
};

export default HeroPic;
