import React from "react";
import { motion } from "framer-motion";

function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ y: -15 }}
      animate={{ y: 15 }}
      transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat: Infinity,
      }}
      className="flex flex-col justify-center items-center border-2  px-5 py-10 rounded-full hover:bg-[#e5fbfb] hover:border-[#5E3BEE] cursor-pointer"
    >
      <img src={skill.image} className="w-[120px]" alt="" />
      <h3 className="font-bold text-center mt-4">{skill.skill}</h3>
    </motion.div>
  );
}

export default SkillCard;
