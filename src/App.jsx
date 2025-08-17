import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import "./index.css";


function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <Education />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
      
     
      
    </div>
  );
}

export default App;
