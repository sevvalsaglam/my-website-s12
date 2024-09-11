import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { languageData } from "../data";

const Header = () => {
  return (
    <>
      <div className="flex gap-30 justify-evenly p-32 pt-16">
        <div className=" text-4xl ps-2.5 font-sans m-2 p-10 max-w-5xl h-60 ">
          <p>{languageData.en.header.greeting}</p>
          <p>{languageData.en.header.intro}</p>

          <div className="text-5xl flex justify-start mt-10 mb-5">
            <RiLinkedinFill className=" dark:text-slate-300"/>
            <AiOutlineGithub className=" dark:text-slate-300"/>
          </div>
          <p className="text-base p-2">
            Currently Freelancing for UX, UI, & Web Design Project.Invite me to
            join your team - sevvallsaglam@gmail.com
          </p>
        </div>
        <img
          src={languageData.en.header.profile_img}
          className="w-96 h-96 rounded-3xl border-solid	border-l-8 border-t-8 border-pink-600 "
        />
      </div>
    </>
  );
};

export default Header;
