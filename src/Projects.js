import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { ReactComponent as BackgroundDesign } from './ProjectPageElements/BG-DESIGN (1)projectpage.svg';
import { ReactComponent as TitleImage } from './ProjectPageElements/PROJECTS.svg';
import { ReactComponent as ListOfProjectsImage } from './ProjectPageElements/LIST OF PROJECTS.svg';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./landingPage.css";
import { useNavigate } from 'react-router-dom';

import Carousel from "./components/CarouselWithoutText";

function Projects() {
  return (
    <>
    <div className="projects-container">
<div>
  <TitleImage className="title-image" alt="title" />
</div>
      <div  className="display_cards_projectpage">
        <RenderProjectCards />
      </div>
    </div>    
    </> 
  );
}

function RenderProjectCards() {
  const nav = useNavigate();
  function handleclick(project){
    console.log(project);
    nav("/projects/project", { state: { results: project } });
  }
  const projects=[
    {
      "id": 1,
      "screenshot": "FFmpeg_screenshot.jpeg",
      "projectName": "FFmpeg",
      "description": "FFmpeg is the leading multimedia framework, able to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created."
  },{
    "id": 2,
    "screenshot": "Ignitus_screenshot.jpeg",
    "projectName": "Ignitus",
    "description": "Ignitus is a non-profit organization that helps students and professionals across the world get handpicked top quality global research and industrial internships, for free!",
  },
  {
    "id": 3,
    "screenshot": "DBpedia_screenshot.jpeg",
    "projectName": "DBpedia",
    "description": "DBpedia is a project aiming to extract structured content from the information created in the Wikipedia project.",

  },
  {
    id: 4,
    "screenshot": "Evote_screenshot.jpeg",
    "projectName": "IBM/EVOTE",
    "description": "A voting application that leverages Hyperledger Fabric and the IBM Blockchain Platform to record and tally ballots.",

  },
  {
    "id": 5,
    "screenshot": "FreeCodeCamp_screenshot.jpeg",
    "projectName": "Free Code Camp",
    "description": "Platform to learn to code for free with millions of other people around the world.",
  },
  {
    "id": 6,
    "screenshot": "Haiku_screenshot.jpeg",
    "projectName": "Haiku",
    "description": "An open-source operating system that specifically targets personal computing.",
  }
];

return (
  <>
  <div className="all-projects-container">
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        screenshot={require("./ProjectPageElements/"+project.screenshot)}
        projectName={project.projectName}
        description={project.description}
        onClick={() => {
          handleclick(project);
        }}
      />
    ))}
  </div>
  <Footer className="footer" />
  </>
);
}

export default Projects;
