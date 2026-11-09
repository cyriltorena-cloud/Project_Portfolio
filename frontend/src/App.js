import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          Cyril Toreña
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Home */}
      <div id="home">
        <Home />
      </div>


      {/* About */}
      <div id="about">
        <About />
      </div>


      {/* Skills */}
      <div id="skills">
        <Skills />
      </div>


      {/* Projects */}
      <div id="projects">
        <Projects />
      </div>


      {/* Education */}
      <div id="education">
        <Education />
      </div>


      {/* Certificates */}
      <div id="certificates">
        <Certificates />
      </div>


      {/* Resume / CV */}
      <div id="resume">
        <Resume />
      </div>


      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}

export default App;