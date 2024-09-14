import React from "react";
import { skillsData } from "../data";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Skills = () => {
  const { langData } = useContext(GlobalContext);
  return (
    <div className="gap-16  mt-12 p-12">
      <h1 className="text-4xl	mt-0 p-0 text-center">{langData.skills.title}</h1>
      <div className="flex flex-row justify-center items-center gap-8 mt-24 mb-24">
        {skillsData.map((skill) => (
          <div>
          <img
            className="w-28 h-28 rounded-2xl"
            src={skill.img}
            alt='' 
          /> <p className="text-gray-400 text-center pt-4">{skill.alt} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
