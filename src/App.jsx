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
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
