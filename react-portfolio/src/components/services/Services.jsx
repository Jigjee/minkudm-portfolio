import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Work Experience</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Freelance Software Developer</h3>
            <h3>(2021-Current)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing and maintaining the website, front and back-end
                functionality of the website to produce clean code that follows
                the design and functional specifications
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Intern </h3>
            <h3>Knowledge Discovery (2021)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Frontend prototyping built using React.js for e- KYC project
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data annotation for object detection (YOLOv4)</p>
            </li>
          </ul>
        </article>
        {/* END OF Webdevelopment */}

        <article className="service">
          <div className="service__head">
            <h3>Quality & Production Engineer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Chief of Quality Control & Assurance CNI Engineering supply
                (2017-2020)
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Chief of Manufacturing (Production) CNI Engineering supply
                (2016-2017)
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Production Engineer CNI Engineering supply (2014-2015)</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  );
};

export default Services;
