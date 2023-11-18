import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  </div>
  )
}

export default App