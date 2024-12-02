import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PoC from "./pages/PoC/PoC";

function App() {
  return (
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/poc" element={<PoC />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;

