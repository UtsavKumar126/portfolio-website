import React from "react";
import "./styles.css";
import nameLogo from "../../assets/images/namelogo.png";

function Navbar() {
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <nav className="navbar bg-white py-3 border-b-2 w-[100vw]">
      <div>
        <img className="max-w-[120px] mx-6" src={nameLogo} alt="" />
      </div>
      <div className=" hidden md:flex justify-between items-center gap-10 links">
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#skill">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <button
          className="mx-5 border-2 border-[#5E3BEE] text-[#5E3BEE] px-4 py-2 rounded md:block hidden"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
