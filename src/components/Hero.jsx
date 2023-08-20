import { motion } from "framer-motion";

import { styles } from "../styles";
import { HiOutlineDownload } from "react-icons/hi";

import { slideIn } from "../utils/motion";

import HeroPic from "./HeroPic";
import resume from "/resume.pdf";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0  max-w-7xl mx-auto flex flex-row items-center gap-6 overflow-hidden`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00cea8]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#00cea8]">Marnel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web Developer, I develop
            <br className="sm:block hidden" /> web applications and user
            interfaces.
          </p>
          <div className="mt-5 p-2 bg-[#00cea8] w-[135px] rounded-[5px] mb-5">
            <a
              href={resume}
              download="resume.pdf"
              className="flex items-center justify-center gap-1"
            >
              Resume <HiOutlineDownload size={19} />
            </a>
          </div>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <HeroPic />
        </motion.div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
