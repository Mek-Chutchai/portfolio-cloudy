import logo from "./logo.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/authentication/homepage";
import Sidebar from "./components/sidebar/sidebar";
import Skillpage from "./components/skill/skillPage";
import ExperiencePage from "./components/experience/experiencePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/skill" element={<Skillpage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
