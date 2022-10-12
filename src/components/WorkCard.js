import "./WorkCardStyles.css";
import React from "react";

// import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <a href={props.proj_url} target="_blank" rel="noreferrer">
        <img src={props.imgsrc} alt="projectImage" />
      </a>

      <h2 className="project-title">{props.title}</h2>
      <div className="pro-detail">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a
            href={props.proj_url}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View
          </a>

          <a
            href={props.source_url}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
