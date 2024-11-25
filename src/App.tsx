import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

