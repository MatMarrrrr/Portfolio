import React, { useEffect, useState } from "react";
import "../style/navbar.css";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="navbar_container">
      <h3>MatMar Portfolio</h3>
      <nav>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
      </nav>
      <div className="navbar_icons">
        <a
          href="https://www.linkedin.com/in/mateusz-marek-679606236/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/MatMarrrrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/matmarrrr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="theme-toggle-container">
        <input
          type="checkbox"
          id="theme-toggle"
          className="theme-toggle-checkbox"
          checked={isDarkMode}
          onChange={handleThemeToggle}
        />
        <label for="theme-toggle" className="theme-toggle-label">
          <span className="theme-toggle-ball"></span>
        </label>
      </div>
    </div>
  );
};
