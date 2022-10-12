import "./FooterStyles.css";
import React from "react";
import {  FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Siwan  Bihar</p>
              <p>India  841406</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8804860995
            </h4>
          </div>
          <div className="email">
            <h4 className="EmailSmall">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              kishankumar28032001@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>Explorer. Tech Enthusiast</p>
            <div className="social">
            
            <a href="https://www.linkedin.com/in/kishan-kumar-597b691a5/" target="_blank" rel="noreferrer" >
            <FaLinkedin
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/Kishan28Kumar">
            <FaGithub
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
              <a href="mailto:kishankumar28032001@gmail.com" target="_blank" rel="noreferrer">
            <FaMailBulk
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
