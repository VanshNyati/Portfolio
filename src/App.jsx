// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"; 
import About from "./components/About"; 
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education"; 
import Achievements from "./components/Achievements"; 
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white scroll-smooth">
      <Header />

      <main>
        <Hero /> 
        <About />  
        <Skills />
        <Experience /> 
        <Projects />  
        <Education /> 
        <Achievements />  
        <Gallery />  
      </main>
      <Footer />  
    </div>
  );
};

export default App;
