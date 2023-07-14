import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectPage() {
  const { projectId } = useParams(); // Access the projectId from URL parameters
  const project = getProjectById(projectId);

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <div>
      <h2>{project.projectName}</h2>
      <img src={project.screenshot.default} alt={project.projectName} />
      <p>{project.description}</p>
    </div>
  );
}

// Function to get the project information based on ID
function getProjectById(projectId) {
  const projects = [
    {
      id: 1,
      screenshot: require('./ProjectPageElements/FFmpeg_screenshot.jpeg'),
      projectName: 'FFmpeg',
      description:
        'FFmpeg is the leading multimedia framework, able to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created.',
    },
    // Add more projects here
  ];

  return projects.find((project) => project.id === Number(projectId));
}

export default ProjectPage;
