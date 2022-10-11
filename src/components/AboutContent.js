import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/react1.avif"
import React2 from "../assets/react2.avif"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima doloremque quia deserunt voluptates nemo.</p>
            <Link to="/contact" className="btn">CONTACT</Link>
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
  )
}

export default AboutContent