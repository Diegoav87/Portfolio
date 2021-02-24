import React, { useState } from "react";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
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
        <div className="ml-auto nav-right" id="wide-links">
          <a href="#about" className="mr-4">
            About
          </a>
          <a href="#projects" className="mr-4">
            Projects
          </a>
          <a href="#services" className="mr-4">
            Services
          </a>
          <a href="#contact" className="mr-4">
            Contact
          </a>
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
