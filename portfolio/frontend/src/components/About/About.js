import React from "react";
import pic from "../../assets/images/port-pic.jpeg";
import { useTranslation } from "react-i18next";
import "./About.css";

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
              <h4>Tecnologías</h4>
              <div className="tec-grid mt-2">
                <span className="tec">Javascript</span>
                <span className="tec">Python</span>
                <span className="tec">HTML {t("and")} CSS</span>
                <span className="tec">Postgres</span>
                <span className="tec">React</span>
                <span className="tec">Django</span>
                <span className="tec">Wordpress</span>
                <span className="tec">Bootstrap</span>
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
