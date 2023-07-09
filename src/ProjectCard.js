import React from 'react';
import { ReactComponent as LearnMoreButton } from './ProjectPageElements/Learn-more_button.svg';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="card">
        <div>
          <img src={props.screenshot} alt="No-image" className="screenshot" />
        </div>
        <h1 className="project-name">{props.projectName}</h1>
        <p className="project-description">{props.description}</p>
        <div className="button-container">
          <a href={props.link}>
            <LearnMoreButton alt="button.svg" className="learn-more-button" />
          </a>
        </div>
      </div>
      <div className="background-card"></div>
    </div>
  );
}

export default ProjectCard;
