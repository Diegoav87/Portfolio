import React from "react";
import pic from "../../assets/images/port-pic.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="about-section" id="about" data-scroll>
        <div className="main-container">
          <div className="grid-about">
            <div className="about-info">
              <h2>{t("about.title")}</h2>
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <div className="grid">
                <div className="techs">
                  <h4>{t("about.languages")}</h4>
                  <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>HTML {t("and")} CSS</li>
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
