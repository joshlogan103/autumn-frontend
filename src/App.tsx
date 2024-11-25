import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;

