import React from "react";
import { useTranslation } from "react-i18next";
import "./Project.css";

const Project = (props) => {
  const { t } = useTranslation();

  return (
    <div className="card bg-secondary project-card">
      <img src={props.backgroundPic} alt="" />
      <div className="card-body project-data dark-bg">
        <h3>{props.title}</h3>
        <p className="mt-1">{props.description}</p>
        <div className="d-flex link-project">
          <a href={props.webLink} className="btn blue-btn">
            {t("projects.website")}
          </a>
          <a href={props.github} className="btn dark-btn ml-2">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
