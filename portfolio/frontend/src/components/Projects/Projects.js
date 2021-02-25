import React from "react";
import pokelixPic from "../../assets/images/pokelix-pic.PNG";
import pollAppPic from "../../assets/images/poll-app-picture.PNG";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="project-section" id="projects" data-scroll>
        <div className="project-container">
          <h2 className="project-title mb-4">{t("projects.title")}</h2>
          {/* <div className="project-right">
                <img className="placeholder-img" src="./images/instagram-clone-picture.PNG">
                <div className="project-info">
                    <h3>Instagram Clone</h3>
                    <p>A clone version of Instagram with features from the original app.</p>
                    <div className="d-flex">
                        <a href="#projects" className="btn blue-btn">Site</a>
                        <a href="#projects" className="btn dark-btn ml-2">Github</a>
                    </div>
                </div>
            </div> */}
          <div className="project-left">
            <div className="project-info">
              <h3>{t("projects.p1t")}</h3>
              <p>{t("projects.p1p")}</p>
              <div className="d-flex">
                <a
                  href="https://poll-app-diegoav87.herokuapp.com/"
                  className="btn blue-btn"
                >
                  {t("projects.website")}
                </a>
                <a
                  href="https://github.com/Diegoav87/Poll-App"
                  className="btn dark-btn ml-2"
                >
                  Github
                </a>
              </div>
            </div>
            <img className="placeholder-img" src={pollAppPic} alt="" />
          </div>
          <div className="project-right">
            <img className="placeholder-img" src={pokelixPic} alt="" />
            <div className="project-info">
              <h3>Pokelix</h3>
              <p>{t("projects.p2p")}</p>
              <div className="d-flex">
                <a
                  href="https://pokelix.herokuapp.com/"
                  className="btn blue-btn"
                >
                  {t("projects.website")}
                </a>
                <a
                  href="https://github.com/Diegoav87/Pokelix"
                  className="btn dark-btn ml-2"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
