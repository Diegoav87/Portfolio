import React from "react";
import serverPic from "../../assets/images/server-pic.png";
import responsivePic from "../../assets/images/responsive-pic.png";
import websitePic from "../../assets/images/websitepic.png";
import apiPic from "../../assets/images/api-pic.png";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="services-section" id="services">
        <h2>{t("services.title")}</h2>
        <div className="services-container">
          <div className="service">
            <img className="service-img" src={websitePic} alt="" />
            <div className="service-info">
              <h4>{t("services.s1t")}</h4>
              <p>{t("services.s1p")}</p>
            </div>
          </div>
          <div className="service">
            <img className="service-img" src={serverPic} alt="" />
            <div className="service-info">
              <h4>{t("services.s2t")}</h4>
              <p>{t("services.s2p")}</p>
            </div>
          </div>
          <div className="service">
            <img className="service-img" src={responsivePic} alt="" />
            <div className="service-info">
              <h4>{t("services.s3t")}</h4>
              <p>{t("services.s3p")}</p>
            </div>
          </div>
          <div className="service">
            <img className="service-img" src={apiPic} alt="" />
            <div className="service-info">
              <h4>{t("services.s4t")}</h4>
              <p>{t("services.s4p")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
