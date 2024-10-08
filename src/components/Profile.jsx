import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Profile = () => {
  const {langData}=
  useContext(GlobalContext);
  return (
    <>
      <h2 className="text-4xl	text-center mt-12 p-12">
        {langData.profile.title}
      </h2>
      <div className="flex gap-10 p-10">
        <div className="bg-white rounded-xl border-solid	border-r-8 border-b-8 border-gray-400	w-1/2 h-72 p-7 dark:bg-neutral-600">
          <h3 className="text-pink-500 text-2xl pl-7">
            {langData.profile.basic_information.title}
          </h3>
          <div className="flex text-lg gap-7 p-7">
            <div className="font-bold w-1/2">
              <p>{langData.profile.basic_information.keys.key_1}</p>
              <p>{langData.profile.basic_information.keys.key_2}</p>
              <p>{langData.profile.basic_information.keys.key_3}</p>
              <p>{langData.profile.basic_information.keys.key_4}</p>
            </div>
            <div>
              <p>{langData.profile.basic_information.values.value_1}</p>
              <p>{langData.profile.basic_information.values.value_2}</p>
              <p>{langData.profile.basic_information.values.value_3}</p>
              <p>{langData.profile.basic_information.values.value_4}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-72 gap-7 p-7">
          <h3 className="text-2xl">
            {langData.profile.about_me.title}{" "}
          </h3>
          <p className="text-lg pb-7">
            {langData.profile.about_me.text_1}{" "}
          </p>
          <p className="text-lg">{langData.profile.about_me.text_2} </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
