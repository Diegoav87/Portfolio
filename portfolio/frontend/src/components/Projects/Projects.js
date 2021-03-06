import React from "react";
import pokelixPic from "../../assets/images/pokelixgif.gif";
import pollAppPic from "../../assets/images/pollappgif.gif";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import Project from "./Project/Project";
import Carousel from "react-elastic-carousel";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="project-section" id="projects" data-scroll>
        <div className="project-container">
          <h2 className="project-title mb-4">{t("projects.title")}</h2>
        </div>
        <div className="project-grid">
          <Carousel itemsToShow={1}>
            <Project
              title={t("projects.p1t")}
              description={t("projects.p1p")}
              webLink={"https://poll-app-diegoav87.herokuapp.com/"}
              github={"https://github.com/Diegoav87/Poll-App"}
              backgroundPic={pollAppPic}
            />

            <Project
              title={"Pokelix"}
              description={t("projects.p2p")}
              webLink={"https://pokelix.herokuapp.com/"}
              github={"https://github.com/Diegoav87/Pokelix"}
              backgroundPic={pokelixPic}
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Projects;
