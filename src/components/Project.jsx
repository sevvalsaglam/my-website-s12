import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Project = () => {

  const {langData}=
  useContext(GlobalContext);

  const projectTopics_1 = langData.projects.project_1.topics;
  const projectCard_1 =langData.projects.project_1;
  const projectTopics_2 = langData.projects.project_2.topics;
  const projectCard_2 =langData.projects.project_2;
  
  return (
    <div className="flex gap-24 m-12 p-12 mt-0 pt-0">
    <section className="bg-sky-100 w-1/2  rounded-2xl p-12 sectionhigh dark:bg-neutral-800">
      <div> 
        <h4 className="text-3xl m-4">{projectCard_1.title} </h4>
        <p className="text-lg p-4	">{projectCard_1.text} </p>
        {projectTopics_1.map((topic)=>
        <span className="bg-white rounded-xl text-lg p-2 m-2 dark:bg-gray-500	">{topic} </span>
        )}
        <div className="flex justify-evenly font-bold mt-32 mb-0 pb-0">
        <a href={projectCard_1.github_link}>{projectCard_1.github} </a>
        <a href={projectCard_1.app_link}>{projectCard_1.go_app} </a>
        </div>
        <img className=" images mt-0 pt-0 w-11/12"  src={projectCard_1.img}></img>
      </div>
    </section>
    <section className="bg-teal-100 w-1/2 rounded-2xl p-12 sectionhigh dark:bg-neutral-600">
      <div> 
        <h4 className="text-3xl m-4">{projectCard_2.title} </h4>
        <p className="text-lg p-4	">{projectCard_2.text} </p>
        {projectTopics_2.map((topic)=>
        <span className="bg-white rounded-xl text-lg p-2 m-2 dark:bg-gray-500 ">{topic} </span>
        )}
        <div className="flex justify-evenly font-bold mt-32 mb-0 pb-0" >
        <a href={projectCard_2.github_link}>{projectCard_2.github} </a>
        <a href={projectCard_2.app_link}>{projectCard_2.go_app} </a>
        </div>
        <img className=" images mt-0 pt-0 w-11/12" src={projectCard_2.img}></img>
      </div>
    </section>
    </div>
  );
};

export default Project;
