import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from "../../assets/images/small-logo.png";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  const handleBurgerClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const changeLanguage = (ln, flagCode) => {
    i18n.changeLanguage(ln);
    setShowLanguages(false);
  };

  const handleLanguageClick = () => {
    if (showLanguages === false) {
      setShowLanguages(true);
    } else {
      setShowLanguages(false);
    }
  };

  return (
    <div>
      {open ? (
        <div className="overlay" style={{ display: "block" }}></div>
      ) : (
        <div className="overlay" style={{ display: "none" }}></div>
      )}
      <nav className="main-nav navbar navbar-expand-lg navbar-light p-4">
        <a className="navbar-brand" href="!#">
          <img src={logo} className="logo mr-2" alt="" />
        </a>
        <div className="ml-auto nav-right" id="wide-links">
          <a href="#about" className="mr-4">
            {t("navLinks.about")}
          </a>
          <a href="#projects" className="mr-4">
            {t("navLinks.projects")}
          </a>
          <a href="#services" className="mr-4">
            {t("navLinks.services")}
          </a>
          <a href="#contact" className="mr-4">
            {t("navLinks.contact")}
          </a>
        </div>
        <div className="lang-menu">
          <div className="selected-lang" onClick={handleLanguageClick}>
            <div
              className="selected-flag"
              style={
                i18n.language === "en"
                  ? {
                      backgroundImage: `url(https://www.countryflags.io/us/flat/32.png)`,
                    }
                  : {
                      backgroundImage: `url(https://www.countryflags.io/es/flat/32.png)`,
                    }
              }
            ></div>
            {i18n.language === "en" ? "English" : "Español"}
          </div>
          {showLanguages ? (
            <ul style={{ display: "block" }}>
              <li className="es" onClick={() => changeLanguage("es", "es")}>
                {t("navLinks.languages.spanish")}
              </li>
              <li className="en" onClick={() => changeLanguage("en", "us")}>
                {t("navLinks.languages.english")}
              </li>
            </ul>
          ) : null}
        </div>
        <div
          className={open ? "menu-btn open" : "menu-btn"}
          onClick={handleBurgerClick}
        >
          <div className="menu-btn-burger"></div>
        </div>
        <div
          className="side-menu"
          style={open ? { left: "65%" } : { left: "100%" }}
        >
          <ul className="menu-list">
            <li>
              <a href="#about" onClick={handleBurgerClick}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleBurgerClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleBurgerClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleBurgerClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
