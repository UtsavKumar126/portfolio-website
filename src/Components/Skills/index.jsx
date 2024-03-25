import React from 'react'
import "./styles.css"
import { SkillData } from '../../assets/data/projectData'
import SkillCard from '../../ExtraComponents/SkillCard'

function Skills() {
  return (
    <div id="skill" className="mt-48 ">
      <div>
        <h1 className="text-2xl md:text-5xl text-[#5E3BEE] text-center font-bold underline underline-offset-8">Skills</h1>
      </div>
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 place-items-stretch gap-10 bg-[#F5FCFF] py-16 px-10">
        {
          SkillData.map((skill,index)=>
          <SkillCard skill={skill}/>
          )
        }

      </div>
    </div>
  )
}

export default Skills