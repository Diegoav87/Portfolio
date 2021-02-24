import React from "react";
import serverPic from "../../assets/images/server-pic.png";
import responsivePic from "../../assets/images/responsive-pic.png";
import websitePic from "../../assets/images/websitepic.png";
import apiPic from "../../assets/images/api-pic.png";

const Services = () => {
  return (
    <div>
      <section className="services-section" id="services">
        <h2>Services</h2>
        <div className="services-container">
          <div className="service">
            <img className="service-img" src={websitePic} alt="" />
            <div className="service-info">
              <h4>Websites</h4>
              <p>Get a simple website to get more clients for your business.</p>
            </div>
          </div>
          <div className="service">
            <img className="service-img" src={serverPic} alt="" />
            <div className="service-info">
              <h4>Web Applications</h4>
              <p>Integration of complete web applications for your business.</p>
            </div>
          </div>
          <div className="service">
            <img className="service-img" src={responsivePic} alt="" />
            <div className="service-info">
              <h4>Responsive Design</h4>
              <p>
                Fully responsive websites will make your website user-friendly
                in all devices.
              </p>
            </div>
          </div>
          <div className="service">
            <img className="service-img" src={apiPic} alt="" />
            <div className="service-info">
              <h4>API</h4>
              <p>Integration of an API for your web application.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
