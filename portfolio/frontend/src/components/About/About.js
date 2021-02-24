import React from "react";
import pic from "../../assets/images/port-pic.jpeg";

const About = () => {
  return (
    <div>
      <section className="about-section" id="about" data-scroll>
        <div className="main-container">
          <div className="grid-about">
            <div className="about-info">
              <h2>About Me</h2>
              <p>
                I’m a software developer who builds amazing websites and web
                applications with some of the best technologies.
              </p>
              <p>
                I build new projects every day for learning more about web
                programming. Currently, I’m doing freelancing for building
                projects and become a better software developer.
              </p>
              <div className="grid">
                <div className="techs">
                  <h4>Languages</h4>
                  <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>HTML and CSS</li>
                  </ul>
                </div>
                <div className="techs">
                  <h4>Frameworks</h4>
                  <ul>
                    <li>Django</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="img-container">
              <img className="person-img" src={pic} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
