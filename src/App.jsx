import axios from "axios";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { GlobalContext } from "./context/GlobalContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState, useEffect } from "react";
import { languageData } from "./data";
import { DataContext } from "./context/DataContext";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [lang, setLang] = useLocalStorage("lang", "tr");
  const [langData, setLangData] = useState(languageData.tr);
  const [responseData, setResponseData] = useState(null); // Sunucudan gelen veri

  // Kullanıcı verileri için state
  const [userData, setUserData] = useState({ name: "", job: "" });

  // Tema değişikliklerini sayfa yüklendikçe uygulamak için useEffect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]); // theme değiştikçe efekt uygulanacak

  // Dil değişikliği sırasında tema sınıfı ekleme ve çıkarma
  useEffect(() => {
    if (lang === "tr") {
      document.documentElement.classList.add("tr");
    } else {
      document.documentElement.classList.remove("tr");
    }
  }, [lang]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeLang = () => {
    setLang(lang === "en" ? "tr" : "en");
    setLangData(lang === "en" ? languageData.tr : languageData.en);
  };

  // Axios ile POST isteği gönderme ve veriyi alma
  const sendData = async () => {
    try {
      // Gönderilecek veri
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        userData
      );

      // Sunucudan gelen yanıtı set etmek
      setResponseData(response.data);
    } catch (error) {
      console.error("Veri gönderme hatası:", error);
    }
  };

  return (
    <>
      <DataContext.Provider value={{ languageData }}>
        <GlobalContext.Provider
          value={{ lang, setLang, theme, setTheme, langData, setLangData }}
        >
          <div className="flex justify-end items-end text-sm text-gray-600 container mx-auto bg-gray-100 gap-5 pr-32 pt-16 dark:bg-zinc-800 dark:text-white">
            <button onClick={toggleTheme}>
              {theme === "light" ? "DARK" : "LIGHT"} MODE
            </button>
            <span>|</span>
            <button onClick={changeLang}>
              {lang === "tr" ? "TURN EN" : "TÜRKÇE'YE GEÇ"}
            </button>
          </div>
          <div className="container mx-auto bg-gray-100 w-full h-4/5 dark:bg-zinc-800 dark:text-white">
            <Header />
          </div>
          <div className="container mx-auto bg-white w-full dark:bg-zinc-700 dark:text-white">
            <Skills />
          </div>
          <div className="container mx-auto bg-gray-100 w-full h-5/6 dark:bg-zinc-800 dark:text-white">
            <Profile>PROFİL</Profile>
          </div>
          <div className="container mx-auto bg-white w-full dark:bg-zinc-700 dark:text-white h-min">
            <Projects>PROJELER</Projects>
      
          </div>
        </GlobalContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
