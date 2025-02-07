import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/components/navbar/navbar.jsx";
import Home from "./assets/pages/Home.jsx";
import Boat from "./assets/pages/Boat.jsx";
import Footer from "./assets/components/navbar/Footer.jsx";
import Apple from './assets/pages/Apple.jsx';

import SalesAnalysis from './assets/pages/SalesAnalysis.jsx';
import UsageAnalysis from './assets/pages/UsageAnalysis.jsx';
import SentimentalAnalysis from './assets/pages/SentimentalAnalysis.jsx';
import MarketTrendAnalysis from './assets/pages/MarketTrendAnalysis.jsx';
import AboutUs from './assets/pages/AboutUs.jsx';
import Amazfit from './assets/pages/Amazfit.jsx';
import Redmi from './assets/pages/Redmi.jsx';
import Google from './assets/pages/Google.jsx';
import Login from './assets/pages/Login.jsx';
import Fitbit from './assets/pages/Fitbit.jsx';
import Resources from './assets/pages/Resources.jsx';
import Samsung from './assets/pages/Samsung.jsx';
import Firebolt from './assets/pages/Fireboltt.jsx';
import Fossil from './assets/pages/Fossil.jsx';


const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/home" element={<Home />} />
      <Route path="/apple" element={<Apple />} />
      <Route path="/boat" element={<Boat />} />
      <Route path='/amazfit' element={<Amazfit/>}/>
      <Route path='/sales-analysis' element={<SalesAnalysis/>}/>
      <Route path='/usage-analysis' element={<UsageAnalysis/>}/>
      <Route path='/sentimental-analysis' element={<SentimentalAnalysis/>}/>
      <Route path='/market-trend-analysis' element={<MarketTrendAnalysis/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/samsung' element={<Samsung/>}/>
      <Route path='/google' element={<Google/>}/>
      <Route path='/fitbit' element={<Fitbit/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/firebolt' element={<Firebolt/>}/>
      <Route path='/redmi' element={<Redmi/>}/>
      <Route path='/fossil' element={<Fossil/>}/>

    </Routes>
    <Footer/>
  </Router>
  
  )
}

export default App
