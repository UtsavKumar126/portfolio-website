import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function ProjectCard({ data }) {
  return (
    <div className="group max-w-sm rounded overflow-hidden shadow-lg border-2 border-[#5E3BEE] p-5 cursor-pointer hover:scale-110 transition-all duration-500">
      <img className="w-full border-2 border-[#5E3BEE]" src={data.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {data.techStack.map((tech, index) => (
          <span
            key={index}
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center ">
        <a href={data.source} className="hover:text-[#5E3BEE]  underline hover:scale-110">Source <ArrowOutwardIcon/></a>
        <a href={data.deploy} className="hover:text-[#5E3BEE] underline hover:scale-110">Deploy <ArrowOutwardIcon/></a> 
      </div>
    </div>
  );
}

export default ProjectCard;
