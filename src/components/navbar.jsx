import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../style/navbar.css";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "pl", label: "Polski" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--primary)",
      border: "none",
      color: "#fff",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--primary)",
      color: "#fff",
      borderRadius: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "rgba(255, 255, 255, 0.1)"
        : "var(--primary)",
      color: state.isSelected ? "var(--accent)" : "#fff",
      borderRadius: 0,
    }),
  };

  return (
    <div className="navbar_container">
      <h3>MatMar Portfolio</h3>
      <nav>
        <a href="#technologies">{t("technologies")}</a>
        <a href="#projects">{t("projects")}</a>
        <a href="#about">{t("aboutMe")}</a>
        <a href="#contact">{t("contact")}</a>
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
        <label htmlFor="theme-toggle" className="theme-toggle-label">
          <span className="theme-toggle-ball"></span>
        </label>
      </div>

      <div className="language-select-container">
        <Select
          defaultValue={languageOptions.find(
            (option) => option.value === i18n.language
          )}
          onChange={handleLanguageChange}
          options={languageOptions}
          styles={customStyles}
          className="language-select"
          classNamePrefix="react-select"
          isSearchable={false}
        />
      </div>
    </div>
  );
};
