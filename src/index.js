import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './landingPage';
import ProjectsPage from './Projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectsPage />
  </React.StrictMode>
);

