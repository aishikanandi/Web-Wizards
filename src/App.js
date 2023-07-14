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

function App() {
  return (
    <BrowserRouter>
      <div className="waveUp" />
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
      </Routes>
    </BrowserRouter>
  );
}

function NavbarWithCondition() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/walloffame";

  return !hideNavbar ? <Navbar className="navBar" /> : null;
}

export default App;
