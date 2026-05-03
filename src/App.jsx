import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/navbar";
import profilePicture from "./img/profilePicture.png";
import { skills } from "./consts/skills";
import { projects } from "./consts/projects";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const experiences = t("experiences", { returnObjects: true });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const loaderContainer = document.getElementById("loader-container");

      if (loaderContainer) {
        loaderContainer.style.display = "none";
      }

      document.body.style.overflowY = "auto";

      AOS.init({
        duration: 750,
        easing: "ease-out-cubic",
        offset: 80,
        once: true,
      });
    }, 850);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="site_shell">
      <Navbar />

      <main>
        <section className="profile_container" aria-labelledby="intro-title">
          <div className="profile_content" data-aos="fade-left">
            <p className="eyebrow">{t("iam")}</p>
            <h1 id="intro-title" className="profile_text">
              <span className="profile_text_accent">Mateusz Marek</span>
              <span>Fullstack Web Developer</span>
            </h1>
            <div className="hero_actions">
              <a href="#contact" className="contact_button">
                {t("contactMe")}
              </a>
              <a href="#projects" className="secondary_button">
                {t("projects")}
              </a>
            </div>
          </div>

          <div className="profile_image" data-aos="fade-right">
            <img src={profilePicture} alt="Mateusz Marek" />
          </div>
        </section>

        <section
          id="experience"
          className="experience_main_container section_block"
          aria-labelledby="experience-title"
        >
          <div className="section_header" data-aos="fade-up">
            <p className="section_kicker">Career</p>
            <h2 id="experience-title">{t("experience")}</h2>
          </div>
          <ol className="experience_timeline" data-aos="fade-up">
            {experiences.map((item) => (
              <li key={`${item.company}-${item.duration}`}>
                <div className="timeline_marker" aria-hidden="true" />
                <div className="experience_card">
                  <span className="experience_company">{item.company}</span>
                  <span className="experience_position">{item.position}</span>
                  <span className="experience_duration">{item.duration}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="technologies"
          className="technologies_main_container section_block"
          aria-labelledby="technologies-title"
        >
          <div className="section_header" data-aos="fade-up">
            <p className="section_kicker">Stack</p>
            <h2 id="technologies-title">{t("technologies")}</h2>
          </div>
          <div className="technologies_container" data-aos="fade-up">
            {skills.map((skill) => (
              <article key={skill.text} className="technology_container">
                <img src={skill.image} alt={`${skill.text} logo`} />
                <p className="technology_text">{skill.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="projects_main_container section_block"
          aria-labelledby="projects-title"
        >
          <div className="section_header" data-aos="fade-up">
            <p className="section_kicker">Selected work</p>
            <h2 id="projects-title">{t("projects")}</h2>
          </div>
          <div className="projects_container" data-aos="fade-up">
            {projects.map((project) => (
              <article className="project_container" key={project.name}>
                <div className="project_media">
                  <img src={project.image} alt={`${project.name} preview`} />
                </div>
                <div className="project_container_info">
                  <p className="project_title">{project.name}</p>
                  <div className="project_actions">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("viewCode")}
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.type === "website" && t("liveVersion")}
                        {project.type === "exe" && t("download")}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="about_me_main_container section_block"
          aria-labelledby="about-title"
        >
          <div className="section_header" data-aos="fade-up">
            <p className="section_kicker">Profile</p>
            <h2 id="about-title">{t("aboutMe")}</h2>
          </div>
          <div className="about_me_container" data-aos="fade-up">
            <p>{t("aboutMeContent")}</p>
          </div>
        </section>

        <section
          id="contact"
          className="contact_me_main_container section_block"
          aria-labelledby="contact-title"
        >
          <div className="section_header" data-aos="fade-up">
            <p className="section_kicker">Connect</p>
            <h2 id="contact-title">{t("contact")}</h2>
          </div>
          <div className="contact_me_container" data-aos="fade-up">
            <a
              href="mailto:marek.mateusz@protonmail.com"
              className="contact_me_item"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>marek.mateusz@protonmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mateusz-marek-679606236/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact_me_item"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/MatMarrrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="contact_me_item"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
