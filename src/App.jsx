import axios from "axios";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { GlobalContext } from "./context/GlobalContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { languageData } from "./data";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [lang, setLang] = useLocalStorage("lang", "tr");
  const [langData, setLangData]= useState(languageData.tr);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  const changeLang = () => {
    setLang(lang === "en" ? "tr" : "en");
    if (lang === "en") {
      document.documentElement.classList.add("tr");
      setLangData(languageData.tr);
    } else {
      document.documentElement.classList.remove("tr");
      setLangData(languageData.en);
    }
  };


  return (
    <>
    <GlobalContext.Provider value={{lang, setLang, theme, setTheme, langData, setLangData}}>
      <div className="flex justify-end items-end text-sm  text-gray-600 container mx-auto bg-gray-100	  gap-5 pr-32 pt-16 dark:bg-zinc-800 dark:text-white">
        <button onClick={toggleTheme}>
          {" "}
          {theme === "light" ? "DARK" : "LIGHT"} MODE{" "}
        </button>
        <span>|</span>
        <button onClick={changeLang}>
          {lang === "tr" ? "TURN EN" : "TÜRKÇE'YE GEÇ"}
        </button>
      </div>
      <div className="container mx-auto bg-gray-100	 w-full h-4/5 dark:bg-zinc-800 dark:text-white">
        <Header></Header>
      </div>
      <div className="container mx-auto bg-white	 w-full  dark:bg-zinc-700 dark:text-white">
        <Skills></Skills>
      </div>
      <div className="container mx-auto bg-gray-100	 w-full h-5/6 dark:bg-zinc-800 dark:text-white">
        <Profile>PROFİL</Profile>
      </div>
      <div className="container mx-auto bg-white	 w-full dark:bg-zinc-700 dark:text-white h-min">
        <Projects>PROJELER</Projects>
      </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
