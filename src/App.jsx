import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {

  const [theme, setTheme] = useLocalStorage("theme","light");
  const [lang, setLang] = useLocalStorage("lang","tr");

  const toggleTheme = ()=> {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  const changeLang = ()=> {
    setLang(lang === "en" ? "tr" : "en");
    if (lang === 'en') {
      document.documentElement.classList.add('tr')
    } else {
      document.documentElement.classList.remove('tr')
    }
  }

  return (
    <>
      <div className="flex justify-end items-end text-sm  text-gray-600 container mx-auto bg-gray-100	 w-10/12 gap-5 pr-32 pt-16 dark:bg-gray-800 dark:text-white">
        <button onClick={toggleTheme}> {theme === "light" ? "DARK" : "LIGHT"} MODE </button>
        <span>|</span>
        <button onClick={changeLang}>{lang === "tr" ? "TURN EN" : "TÜRKÇE'YE GEÇ"}</button>
      </div>
      <div className="container mx-auto bg-gray-100	 w-10/12 h-4/5 dark:bg-gray-800 dark:text-white">
        <Header></Header>
      </div>
      <div className="container mx-auto bg-white	 w-10/12  dark:bg-gray-600 dark:text-white">
        <Skills></Skills>
      </div>
      <div className="container mx-auto bg-gray-100	 w-10/12 h-5/6 dark:bg-gray-800 dark:text-white">
        <Profile>PROFİL</Profile>
      </div>
      <div className="container mx-auto bg-white	 w-10/12 h-4/5 dark:bg-gray-600 dark:text-white">
        <Projects>PROJELER</Projects>
      </div>
    </>
  );
}

export default App;
