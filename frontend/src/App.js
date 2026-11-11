
import { useEffect, useState } from "react";
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
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        return response.json();
      })
      .then((data) => {
        setPortfolioData(data);
        console.log("Portfolio Data:", data);
      })
      .catch((error) => {
        console.error("API Connection Error:", error);
        setError("Unable to connect to the portfolio server.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="app">Loading portfolio...</div>;
  }

  if (error) {
    return <div className="app">{error}</div>;
  }

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
        <Home portfolioData={portfolioData} />
      </div>

      {/* About */}
      <div id="about">
        <About portfolioData={portfolioData} />
      </div>

      {/* Skills */}
      <div id="skills">
        <Skills portfolioData={portfolioData} />
      </div>

      {/* Projects */}
      <div id="projects">
        <Projects portfolioData={portfolioData} />
      </div>

      {/* Education */}
      <div id="education">
        <Education portfolioData={portfolioData} />
      </div>

      {/* Certificates */}
      <div id="certificates">
        <Certificates portfolioData={portfolioData} />
      </div>

      {/* Resume */}
      <div id="resume">
        <Resume portfolioData={portfolioData} />
      </div>

      {/* Contact */}
      <div id="contact">
        <Contact portfolioData={portfolioData} />
      </div>

    </div>
  );
}

export default App;
