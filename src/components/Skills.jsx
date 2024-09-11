import React from "react";
import { languageData } from "../data";
import { skillsData } from "../data";

const Skills = () => {

  return (
    <div className="gap-16  mt-12 p-12">
      <h1 className="text-4xl	mt-24 text-center">{languageData.en.skills.title}</h1>
      <div className="flex flex-row justify-center items-center gap-8 mt-24 mb-24">
        <img
          className="w-28 h-28 rounded-2xl"
          src={skillsData[0].img}
        />
        <img
          className="w-28 h-28 rounded-2xl "
          src={skillsData[1].img}
        />
        <img
          className="w-28 h-28 rounded-2xl"
          src={skillsData[2].img}
        />
        <img
          className="w-28 h-28 rounded-2xl"
          src={skillsData[3].img}
        />
        <img
          className="w-28 h-28 rounded-2xl"
          src={skillsData[4].img}
        />
        <img
          className="w-28 h-28 rounded-2xl"
          src={skillsData[5].img}
        />
      </div>
    </div>
  );
};

export default Skills;
