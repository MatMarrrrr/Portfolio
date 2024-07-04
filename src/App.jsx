import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/navbar";
import profilePicture from "./img/profilePicture.png";
import { skills } from "./consts/skills";
import { projects } from "./consts/projects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="profile_container">
        <div className="profile_text" data-aos="fade-left">
          I'm <span className="profile_text_accent">Mateusz Marek</span>
          <br />
          Fullstack Web Developer
          <br />
          <a href="mailto:marek.mateusz@protonmail.com">
            <button className="contact_button">Contact Me</button>
          </a>
        </div>
        <div className="profile_image" data-aos="fade-right">
          <img src={profilePicture} alt="Mateusz Marek" />
        </div>
      </div>

      <div id="technologies" className="technologies_main_container">
        <h1 data-aos="fade-up">Technologies</h1>
        <div className="technologies_container" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div key={index} className="technology_container">
              <img src={skill.image} alt={skill.text} />
              <p className="technology_text">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="projects" className="projects_main_container">
        <h1 data-aos="fade-up">Projects</h1>
        <div className="projects_container" data-aos="fade-up">
          {projects.map((project, index) => (
            <div className="project_container" key={index}>
              <div className="project_container_info">
                <p className="project_title">{project.name}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.type === "website" ? "Live version" : "Download"}
                </a>
              </div>
              <img src={project.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
