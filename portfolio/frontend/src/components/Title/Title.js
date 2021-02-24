import React from "react";
import { ReactComponent as ShowcasePic } from "../../assets/images/showcasepic.svg";

const Title = () => {
  return (
    <div>
      <section className="title-section">
        <div className="showcase-container">
          <h1 className="title" id="title">
            Need a website?
          </h1>
          <p className="lead-in">
            Hi, my name is Diego and I develop websites and web applications
            providing an amazing user experience.
          </p>
          <a href="#services" className="btn blue-btn">
            Get started
          </a>
          <a href="#projects" className="btn dark-btn ml-2">
            My work
          </a>
        </div>
        <div className="showcase-img">
          <ShowcasePic className="main-img" />
        </div>
      </section>
    </div>
  );
};

export default Title;
