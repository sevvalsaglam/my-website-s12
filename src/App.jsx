import Header from "./components/Header"
import Skills from "./components/Skills"

function App() {
  return (
    <>
    <div className="container mx-auto bg-gray-100	 w-10/12 h-4/5">
    <Header></Header>
    </div>
    <div className="container mx-auto bg-gray-300	 w-10/12 h-4/5">
    <Skills></Skills>
    </div>
    </>
  )
}

export default App
