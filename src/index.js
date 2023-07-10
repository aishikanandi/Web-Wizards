import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import ProgramTimeline from './programTimeline';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        {/* <Routes> */}
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/timeline" component={ProgramTimeline} />
        </Routes> */}
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


