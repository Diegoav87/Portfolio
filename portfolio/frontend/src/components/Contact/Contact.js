import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact-section" data-scroll>
        <div className="main-container">
          <h2 className="project-title" id="contact">
            Contact
          </h2>
          <form
            method="POST"
            className="contact-form"
            name="contact"
            data-netlify="true"
          >
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
