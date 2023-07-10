import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './landingPage';
import ProgramTimeline from './programTimeline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProgramTimeline />
  </React.StrictMode>
);
