import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import Nav from './Components/Nav'
import PortfolioExample from './Components/PortfolioExample';
import Hexadecimal from './Components/ColourGenerator';
import Home from './Components/Home';
import ColourCoder from './Components/Colour-Coder';
import BarChart from './Components/BarChart';


function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-example" element={<PortfolioExample />} />
          <Route path="/colour-generator" element={<Hexadecimal />} />
          <Route path ="/colour-coding" element={<ColourCoder />} />
          <Route path ="/bar-chart" element={<BarChart />} />
        </Routes>
    </div>
  );
}

export default App
