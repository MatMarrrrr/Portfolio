import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/navbar";
import profilePicture from "./img/profilePicture.png";
import { skills } from "./consts/skills";
import { projects } from "./consts/projects";
import { useTranslation } from "react-i18next";

function App() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const loaderContainer = document.getElementById("loader-container");
      if (loaderContainer) {
        loaderContainer.style.display = "none";
        document.body.style.overflowY = "auto";
      }
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <Navbar />

      <div className="profile_container">
        <div className="profile_text" data-aos="fade-left">
          {t("iam")} <span className="profile_text_accent">Mateusz Marek</span>
          <br />
          Fullstack Web Developer
          <br />
          <a href="#contact">
            <button className="contact_button">{t("contactMe")}</button>
          </a>
        </div>
        <div className="profile_image" data-aos="fade-right">
          <img src={profilePicture} alt="Mateusz Marek" />
        </div>
      </div>

      <div id="technologies" className="technologies_main_container">
        <h1 data-aos="fade-up">{t("technologies")}</h1>
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
        <h1 data-aos="fade-up">{t("projects")}</h1>
        <div className="projects_container" data-aos="fade-up">
          {projects.map((project, index) => (
            <div className="project_container" key={index}>
              <div className="project_container_info">
                <p className="project_title">{project.name}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {t("viewCode")}
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.type === "website"
                    ? t("liveVersion")
                    : t("download")}
                </a>
              </div>
              <img src={project.image} />
            </div>
          ))}
        </div>
      </div>

      <div id="about" className="about_me_main_container">
        <h1 data-aos="fade-up">{t("aboutMe")}</h1>
        <div className="about_me_container" data-aos="fade-up">
          <div className="about_me_text">
            <p>{t("aboutMeContent")}</p>
          </div>
          <div className="experience_container">
            <h2>{t("experience")}</h2>
            <ul>
              {t("experiences", { returnObjects: true }).map((item, index) => (
                <li key={index}>
                  <span>{item.company}</span> - {item.position} ({item.duration}
                  )
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div id="contact" className="contact_me_main_container">
        <h1 data-aos="fade-up">{t("contact")}</h1>
        <div className="contact_me_container" data-aos="fade-up">
          <a
            href="mailto:marek.mateusz@protonmail.com"
            className="contact_me_item"
          >
            <i className="fas fa-envelope"></i>
            <span>marek.mateusz@protonmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mateusz-marek-679606236/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_me_item"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/MatMarrrrr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_me_item"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
