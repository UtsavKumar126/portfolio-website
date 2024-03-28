import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [block, setBlock] = useState(false);
  window.addEventListener('resize',(event)=>{
    if(window.innerHeight >= 768){
      setBlock(false);
      console.log(false);
    }; 
  })
  return (
    <div className="p-2">
      <Navbar block={block} setBlock={setBlock} />
      {block && (
        <div className="flex flex-col gap-5 justify-start px-5 mt-4 transition-all duration-500">
          <a href="#home">Home</a>
          <a href="#About">About</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
