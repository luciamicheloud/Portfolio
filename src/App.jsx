import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import ContactPage from "./pages/Contact/ContactPage";
import Proyects from "./pages/Proyects/Proyects";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/proyects" element={<Proyects />} />
      </Routes>
  </div>
  )
}

export default App