import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/components/navbar/navbar.jsx";
import Home from "./assets/pages/Home.jsx";
import Boat from "./assets/pages/Boat.jsx";
import Footer from "./assets/components/navbar/Footer.jsx";
const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      
      <Route path="/boat" element={<Boat />} />
      
      
    </Routes>
    <Footer/>
  </Router>
  
  )
}

export default App
