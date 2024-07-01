import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/navbar";
import profileImage from "./img/profile_image.png";
import { skills } from "./consts/skills";

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
      <div className="profile_container" data-aos="fade-up">
        <div className="profile_text">
          I'm <span className="profile_text_accent">Mateusz Marek</span>
          <br />
          Fullstack Web Developer
          <br />
          <a href="mailto:marek.mateusz@protonmail.com">
            <button className="contact_button">Contact Me</button>
          </a>
        </div>
        <div className="profile_image">
          <img src={profileImage} alt="Mateusz Marek" />
        </div>
      </div>
      <div className="skills_main_container">
        <h1 data-aos="fade-up">My Skills</h1>
        <div className="skills_container">
          {skills.map((skill, index) => (
            <div key={index} className="skill_container" data-aos="fade-up">
              <img src={skill.image} alt={skill.text} />
              <p className="skill_text">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
