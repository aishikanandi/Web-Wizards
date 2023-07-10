import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { ReactComponent as BackgroundDesign } from './ProjectPageElements/BG-DESIGN (1)projectpage.svg';
import { ReactComponent as TitleImage } from './ProjectPageElements/PROJECTS.svg';
import { ReactComponent as ListOfProjectsImage } from './ProjectPageElements/LIST OF PROJECTS.svg';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./landingPage.css";

function Projects() {
  return (
    <>
    <div className="waveUpProjectspage" />
      <Navbar className="navBar" />
    <div className="projects-container">
<div>
  <TitleImage className="title-image" alt="title" />
</div>
<div className="list-of-image-container">
  <ListOfProjectsImage className="list-of-projects-image" alt="list" />
</div>
      <div  className="display_cards_projectpage">
        <RenderProjectCards />
      </div>
    </div>    
    </> 
  );
}

function RenderProjectCards() {
  return (
    <>
    <div className="all-projects-container">
      <ProjectCard
        screenshot={require('./ProjectPageElements/FFmpeg_screenshot.jpeg')}
        projectName="FFmpeg"
        description="FFmpeg is the leading multimedia framework, able to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created."
        link="#"
      />
      <ProjectCard
        screenshot={require("./ProjectPageElements/Ignitus_screenshot.jpeg")}
        projectName="Ignitus"
        description="Ignitus a non-profit organization that helps students and professionals across the world get handpicked top quality global research and industrial internships, for free!"
        link="#"
      />
      <ProjectCard
        screenshot={require("./ProjectPageElements/DBpedia_screenshot.jpeg")}
        projectName="DBpedia"
        description="DBpedia is a project aiming to extract structured content from the information created in the Wikipedia project."
        link="#"
      />
      <ProjectCard
        screenshot={require("./ProjectPageElements/Evote_screenshot.jpeg")}
        projectName="IBM/EVOTE"
        description="A voting application that leverages Hyperledger Fabric and the IBM Blockchain Platform to record and tally ballots."
        link="#"
      />
      <ProjectCard
        screenshot={require("./ProjectPageElements/FreeCodeCamp_screenshot.jpeg")}
        projectName="Free Code Camp"
        description="Platform to learn to code for free with millions of other people around the world"
        link="#"
      />
      <ProjectCard
        screenshot={require('./ProjectPageElements/Haiku_screenshot.jpeg')}
        projectName="Haiku"
        description="An open-source operating system that specifically targets personal computing."
        link="#"
      />
    </div>
    <Footer className="footer" />
    </>
  );

  
}

export default Projects;
