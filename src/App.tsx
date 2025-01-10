import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PoC from "./pages/PoC/PoC";
import PoC2 from "./pages/PoC2/PoC2"

function App() {
  return (
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/poc" element={<PoC />} />
            <Route path="/scalero" element={<PoC2 />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;

