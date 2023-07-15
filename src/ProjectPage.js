import React from "react";
import Footer from "./components/footer";
import "./landingPage.css";
import { useLocation } from "react-router-dom";
import "./ProjectPage.css";
import { ReactComponent as GitHubLogo } from "./github-logo.svg";
import Navbar from "./components/navbar";

function Project() {
  const location = useLocation();
  const { results } = location.state;
  console.log(results);
  const capitalizedProjectName = results.projectName.toUpperCase();

  const techStackItems = results.techStack.split(", ");
  const contributorItems = results.contributors.split(", ");
  return (
    <div className="projectPagess">
      <Navbar className="navbar" />
      <div className="github-project-container">
        <div className="github-project-details">
          <div className="github-header">
          <h1>{results.projectName}</h1>
            <a href={results.link}><GitHubLogo className="github-logo" alt="GitHub Logo" /></a>
          </div>
          <p className="github-project-description">{results.description+" "}</p>
        </div>
        <div className="github-commit-timeline">
          <div className="github-commit-header">
            <div className="github-commit-circle"></div>
            <p className="github-commit-date">
              git commit -m "Tech Stack added"
            </p>
          </div>
          {techStackItems.map((item, index) => (
          <div className="github-commit-header" key={`techStack-${index}`}>
            <p className="github-commit-tech-stack">+Modified: {item}</p>
          </div>
        ))}

          <div className="github-commit-header">
            <div className="github-commit-circle"></div>
            <p className="github-commit-date">
              git commit -m "Contributors added"
            </p>
          </div>

          {contributorItems.map((item, index) => (
          <div className="github-commit-header" key={`contributors-${index}`}>
            <p className="github-commit-tech-stack">+Modified: {item}</p>
          </div>
        ))}
        <div className="github-commit-header">
            <div className="github-commit-circle"></div>
            <p className="github-commit-date">
              git commit -m "Screenshots added"
            </p>
          </div>
          <div className="github-commit-image"><img src={require(`./ProjectPageElements/${results.screenshot}`)} alt={results.projectName} style={{ width: '70%', display: 'block', margin: '0 auto' }}/></div>
          
        </div>

      </div>
      <Footer className="footer" />
    </div>
  );
}

export default Project;
