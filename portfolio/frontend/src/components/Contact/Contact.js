import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ryhoi5",
        "template_4pnysiq",
        e.target,
        "user_JL6NzPnMaotSs4yuGZF3U"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 5000);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section className="contact-section" data-scroll>
        <div className="main-container">
          <h2 className="project-title" id="contact">
            Contact
          </h2>
          <form
            onSubmit={sendEmail}
            method="POST"
            className="contact-form"
            name="contact"
            data-netlify="true"
          >
            {showAlert ? (
              <Alert variant="success">
                Thank you! Your form submission has been received.
              </Alert>
            ) : null}
            <div className="row">
              <div className="col">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col">
                <input type="text" name="email" placeholder="Email" />
              </div>
            </div>
            <div>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn blue-btn contact-btn">
              Submit
            </button>
          </form>
          <p className="text-white text-center">diegoabdov@gmail.com</p>
          <div className="contact-icons">
            <a href="https://github.com/Diegoav87">
              <i className="fab fa-github fa-2x mr-2"></i>
            </a>
            <a href="https://www.instagram.com/diegoabdo87/">
              <i className="fab fa-instagram fa-2x mr-2"></i>
            </a>
            <a href="https://stackoverflow.com/users/14572937/diegoa87">
              <i className="fab fa-stack-overflow fa-2x"></i>
            </a>
          </div>
          <p className="attribution">
            The colorful backgrounds of the website were customized at{" "}
            <a href="https://www.svgbackgrounds.com/">SVGBackgrounds</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
