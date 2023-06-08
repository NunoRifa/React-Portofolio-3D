import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-tr-[50px] rounded-bl-[50px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-tr-[50px] rounded-bl-[50px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {technologies.map((tech, index) => (
        <div
          className="max-[768px]:w-full max-[768px]:px-[3em]"
          key={tech.name}
        >
          <TechCard key={tech.name} index={index} {...tech} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
