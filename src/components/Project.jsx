import React from "react";
import { languageData } from "../data";

const Project = () => {
  return (
    <section>
      <div>
        <h3>{languageData.en.projects.title} </h3>
        <p>{languageData.en.projects.project_1.title} </p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
      <img></img>
    </section>
  );
};

export default Project;
