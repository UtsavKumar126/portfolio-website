import React from "react";
import "./styles.css";
import image from "../../assets/images/image.png";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section id="About" className="mt-48 flex justify-around items-center">
      <div className="max-w-[45%] flex flex-col gap-4 bg-[#F5FCFF] py-5 px-20 rounded-2xl">
        <h1 className="text-5xl text-[#5E3BEE] font-bold underline underline-offset-8">
          About Me
        </h1>
        <p className="leading-7 tracking-wide">
          Greetings! I'm a mechanical engineering graduate from UCET Hazaribagh,
          currently immersing myself in frontend development. Proficient in
          HTML, CSS, JavaScript, React, and Tailwind CSS, I'm passionate about
          crafting engaging web experiences.
        </p>
        <p className="leading-7 tracking-wide">
          With a background in engineering and a newfound love for coding, I
          bring a unique blend of analytical thinking and creative
          problem-solving to my work. Eager to apply my skills and contribute to
          innovative projects, I'm excited about the endless possibilities in
          the tech world.
        </p>
        <p className="leading-7 tracking-wide">
          Outside of coding, I enjoy Cooking ,Cricket finding inspiration and
          balance beyond the screen.
        </p>
        <p className="leading-7 tracking-wide">
          Thank you for taking the time to learn a bit about me. I look forward
          to the opportunity to connect and collaborate!
        </p>
      </div>
      <motion.div
        className="border-2 rounded-full"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
      >
        <img src={image} alt="" />
      </motion.div>
    </section>
  );
}

export default AboutMe;
