import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./landingPage";
import ProgramTimeline from "./programTimeline";
import Blogs from './blogs';
import Program from "./Program";
import Projects from "./Projects";
import Subscription from "./Subscription";
import WallOfFame from "./wallOfFame";
import Navbar from "./components/navbar";
import OpenSourcePrograms from "./OpenSourcePrograms";
import OpenSourceIndividualProgram from './OpenSourceIndividualProgram';
import Community from "./Community";
import BlogPage from "./BlogPage";
import ProjectPage from "./ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <WaveUpWithCondition/>
      <NavbarWithCondition />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/programtimeline" element={<ProgramTimeline />} />
        <Route path="/programtimeline/program" element={<Program />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/walloffame" element={<WallOfFame />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/opensource" element={<OpenSourcePrograms />} />
        <Route path="/opensource/program" element={<OpenSourceIndividualProgram />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function NavbarWithCondition() {
  const location = useLocation();
  
  const hideNavbar = /^\/projects\/\d+$/.test(location.pathname) || location.pathname === "/walloffame";

  return !hideNavbar ? <Navbar className="navBar" /> : null;
}
function WaveUpWithCondition() {
  const location = useLocation();
  const regex = /^\/blogs(\/.*)?$/;
  const hideWaves = regex.test(location.pathname);
  if(location.pathname === "/walloffame") return null;
  return hideWaves ? <div className="waveUpStylish" /> : <div className="waveUp" />;
}
export default App;
