import React from "react";
import "./styles.css";
import avatar from "../../assets/images/peakpx-removebg.png";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section id="home" className="bg-[#F5FCFF] mt-10 flex justify-around items-center py-20">
      <div className="max-w-2xl">
        <h3 className="font-bold text-xl">Hey, I am Utsav</h3>
        <h1 className="font-bold text-5xl text-black mt-4">
          <span>I am a </span>
          <ReactTyped
            strings={["Fresher", "Frontend Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          >
            <input className="bg-[#F5FCFF] text-[#5E3BEE]" type="text" />
          </ReactTyped>
        </h1>
        <p>
          Crafting seamless user experiences with elegant code and captivating
          designs. Specializing in HTML, CSS, JavaScript, React and Tailwind CSS
          for responsive and visually stunning websites.
        </p>
        <div className="flex justify-start items-center gap-4 mt-8">
          <button className="px-4 py-2 border-2 border-white bg-[#5E3BEE] text-white rounded"
          onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
          <button className="px-4 py-2 border-2 border-white bg-[#5E3BEE] text-white rounded">
           <a href="src/assets/docs/Updated_resume (1).pdf" download>Download CV</a>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ y: -15 }}
        animate={{ y: 15 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="w-[350px] h-[350px] border-2 flex items-center justify-center rounded-full "
      >
        <img className="max-w-[350px] max-h-[550px] " src={avatar} alt="" />
      </motion.div>
    </section>
  );
}

export default Hero;
