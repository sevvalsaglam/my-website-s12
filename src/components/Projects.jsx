import React from "react";
import Project from "./Project";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Projects = () => {
  
  const { langData } = useContext(GlobalContext);

  return (
    <>
      <h2 className="text-4xl	text-center mt-12 p-12">
        {langData.projects_title.title}{" "}
      </h2>
      <Project></Project>
      <section className="flex justify-center mt-28 pb-40">
        <div className="w-96 text-right pr-12">
      <p className="text-3xl">{langData.footer} </p>
      </div>
      <div className="flex flex-col text-left ">
      <a className="text-blue-700" href="https://github.com/sevvalsaglam">Github</a>
      <a className="text-black dark:text-white " >Personal Blog</a>
      <a className="text-sky-900" href="https://www.linkedin.com/in/sevvalsaglam/">LinkedIn</a>
      <a className="text-red-800">Email</a>
      </div>
      </section>
    </>
  );
};

export default Projects;
