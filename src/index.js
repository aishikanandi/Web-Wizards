// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import {  HashRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './landingPage.js';
// import ProgramTimeline from './programTimeline.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <HashRouter>
//         <Routes>
//         <Route exact path="/" component={LandingPage} />
//         <Route exact path="/timeline" component={ProgramTimeline} />
//         </Routes>
//       </HashRouter> */}
//       <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);