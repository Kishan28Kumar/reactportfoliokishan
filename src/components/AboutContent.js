import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.avif";
import React2 from "../assets/react2.avif";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am an Undergraduate Final Year student persuing my Bachelor of
          Engineering Degree in Computer Science and Engineering. Frontend
          Developer in ReactJS . Problem Solving Skill. Self Motivated
          .Passionate student seeking an opportunity to work in a challenging
          environment, enhance my Skillset and Utilize my skills for the growth
          of the organization
        </p>
        <Link to="/contact" className="btn">
          CONTACT
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
