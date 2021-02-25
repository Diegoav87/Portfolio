import React from "react";
import { ReactComponent as ShowcasePic } from "../../assets/images/showcasepic.svg";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="title-section">
        <div className="showcase-container">
          <h1 className="title" id="title">
            {t("title")}
          </h1>
          <p className="lead-in">{t("lead")}</p>
          <a href="#services" className="btn blue-btn">
            {t("getStarted")}
          </a>
          <a href="#projects" className="btn dark-btn ml-2">
            {t("myWork")}
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
