import { useEffect, useState } from "react";
import Select from "react-select";
import "../style/navbar.css";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((currentMode) => !currentMode);
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
      minHeight: "42px",
      backgroundColor: "var(--surface-strong)",
      border: "1px solid var(--border)",
      borderRadius: "8px",
      boxShadow: "none",
      color: "var(--text)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--text)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--surface-strong)",
      border: "1px solid var(--border)",
      borderRadius: "8px",
      overflow: "hidden",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "var(--accent-soft)"
        : "var(--surface-strong)",
      color: state.isSelected ? "var(--accent)" : "var(--text)",
    }),
  };

  return (
    <header className="navbar_container">
      <a className="navbar_brand" href="#" onClick={() => setIsMenuOpen(false)}>
        MatMar Portfolio
      </a>
      <nav className={isMenuOpen ? "nav_open" : ""} aria-label="Primary">
        <a href="#experience" onClick={() => setIsMenuOpen(false)}>
          {t("experience")}
        </a>
        <a href="#technologies" onClick={() => setIsMenuOpen(false)}>
          {t("technologies")}
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
          {t("projects")}
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          {t("aboutMe")}
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          {t("contact")}
        </a>
        <div className="language-select-container">
          <Select
            value={languageOptions.find(
              (option) => option.value === i18n.language
            )}
            onChange={handleLanguageChange}
            options={languageOptions}
            styles={customStyles}
            className="language-select"
            classNamePrefix="react-select"
            isSearchable={false}
            aria-label="Language"
          />
        </div>
        <div className="theme-toggle-container-mobile">
          <input
            type="checkbox"
            id="theme-toggle-mobile"
            className="theme-toggle-checkbox"
            checked={isDarkMode}
            onChange={handleThemeToggle}
            aria-label="Toggle dark mode"
          />
          <label htmlFor="theme-toggle-mobile" className="theme-toggle-label">
            <span className="theme-toggle-ball"></span>
          </label>
        </div>
      </nav>
      <div className="navbar_icons">
        <a
          href="https://www.linkedin.com/in/mateusz-marek-679606236/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/MatMarrrrr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>

      <div className="theme-toggle-container">
        <input
          type="checkbox"
          id="theme-toggle"
        className="theme-toggle-checkbox"
        checked={isDarkMode}
        onChange={handleThemeToggle}
        aria-label="Toggle dark mode"
      />
      <label htmlFor="theme-toggle" className="theme-toggle-label">
        <span className="theme-toggle-ball"></span>
      </label>
    </div>

      <button
        type="button"
        className="burger-menu-container"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
      >
        <div className={isMenuOpen ? "burger-menu open" : "burger-menu"}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </header>
  );
};
