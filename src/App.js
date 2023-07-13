import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./landingPage";
import ProgramTimeline from "./programTimeline";
import Program from "./Program";
import Projects from "./Projects";
import Subscription from "./Subscription";

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/programtimeline' element={<ProgramTimeline />} />
        <Route path='/programtimeline/program' element={<Program />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;