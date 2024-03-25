import React from "react";
import "./styles.css";
import ProjectCard from "../../ExtraComponents/ProjectCard";
import { projectData } from "../../assets/data/projectData";
import cryptoImage from "../../assets/images/crypto-tracker.png";
import Portfolio from "../../assets/images/Portfolio.png"
import youtube from "../../assets/images/youtube.png"
import Blinkit from "../../assets/images/Blinkit.png"

function Projects() {
  const imagesArray=[cryptoImage,Portfolio,youtube,Blinkit]
  return (
    <section id="project" className="mt-48 ">
      <div>
        <h1 className="text-5xl text-[#5E3BEE] text-center font-bold underline underline-offset-8">My Portfolio</h1>
      </div>
      <div className="mt-20 grid place-content-evenly grid-cols-3 place-items-stretch gap-10 bg-[#F5FCFF] py-16 px-10">
        {
          projectData.map((Project,i)=>
            <ProjectCard data={Project} image={imagesArray[i]} key={i}/>
          )
        }
      </div>
    </section>
  );
}

export default Projects;
