import React from 'react';
import ProjectCard from './OpenSourceProgramCard';
import './OpenSourcePrograms.css';
import { ReactComponent as OpenSouceImage } from './OpenSourceProgramPageElements/OpenSource.svg';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./landingPage.css";
import { useNavigate } from 'react-router-dom';

function Projects() {
  return (
    <>
    <div className="open-source-programs-container">
        <div>
        <OpenSouceImage className="open-source-title-image" alt="title" />
        </div>
      <div  className="display_cards_programpage">
        <RenderProjectCards />
      </div>
    </div>    
    </> 
  );
}

function truncateDescription(description) {
    if (description.length > 130) {
      return description.substring(0, 130) + "...";
    }
    return description;
  }

function RenderProjectCards() {
  const nav = useNavigate();
  function handleclick(open_source_program){
    console.log(open_source_program);
    nav("/opensource/program", { state: { results: open_source_program } });
  }
    const open_source_programs = [
        {
            "id": 1,
            "name": "GSOC",
            "description": "Google Summer of Code (GSoC) is an annual program organized by Google that aims to bring students from around the world into the open-source software development community. GSoC provides students with the opportunity to work on real-world projects under the mentorship of experienced developers from various open-source organizations. During the program, selected students work remotely on their assigned projects over a period of three months. They collaborate closely with their mentors, who guide and support them throughout the development process. Students gain valuable hands-on experience by actively contributing code, fixing bugs, adding new features, and improving existing software.",
            "logo": "gsoc.png",
            "BGremovedlogo": "gsocRemovedBG.png"
        },
        {
            "id": 2,
            "name": "Outreachy",
            "description": "Outreachy is a global program that provides paid internships to individuals from underrepresented groups in the field of technology. The program aims to support and empower aspiring technologists, especially those who face systemic barriers and lack access to traditional pathways in the tech industry. Outreachy offers a unique opportunity for participants to work on open-source projects with established organizations and gain hands-on experience in a supportive and inclusive environment. During the internship, Outreachy participants collaborate with mentors who guide and mentor them throughout the project. They contribute to open-source software development, working on coding tasks, bug fixes, documentation, and other project-related activities.",
            "logo": "Outreachy.png",
            "BGremovedlogo": "outreachyRemovedBG.svg"
        },
        {
            "id": 3,
            "name": "C4GT",
            "description": "C4GT (Code for Good Techathon) is an annual hackathon event that brings together technology enthusiasts, developers, and problem solvers to collaborate on innovative solutions for social impact. The main objective of C4GT is to leverage technology for the greater good by addressing pressing social challenges and creating positive change in communities. Participants are encouraged to think creatively, apply their technical skills, and work in teams to develop sustainable and impactful projects. During the C4GT hackathon, participants have the opportunity to engage in hands-on problem-solving, ideation, and prototyping. They collaborate with like-minded individuals, exchange ideas, and leverage their technical expertise to tackle social issues such as education, healthcare, environmental sustainability, and poverty alleviation.",
            "logo": "c4gt.jpg",
            "BGremovedlogo": "c4gtRemovedBG.png"
        }
    ]
  return (
    <>
    <div className="all-open-source-programs-container">
        {open_source_programs.map((open_source_program) => (
                <ProjectCard key={open_source_program.id}
                screenshot={require('./OpenSourceProgramPageElements/' + open_source_program.logo)}
                projectName={open_source_program.name}
                description={truncateDescription(open_source_program.description)}
                onClick={() => {
                  handleclick(open_source_program);
                }}
              />
        ))};
    </div>
    <Footer className="footer" />
    </>
  );
}

export default Projects;
