 import "./HeroImgStyles.css"
 import React from 'react'
 import IntroImg from "../assets/intro-bg.jpg";
 import { Link } from "react-router-dom";
 import CV from "../assets/My_CV.pdf";
 
 const HeroImg = () => {
   return (
     <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI I'M KISHAN KUMAR</p>
            <h1>ReactJS Developer</h1>
            <div className="project_resume">
                <Link to ="/project" className="btn">PROJECTS</Link>
                <a href={CV} target="_blank" rel="noreferrer"  className="btn">MY RESUME</a>
            </div>
        </div>
     </div>
   )
 }
 
 export default HeroImg;