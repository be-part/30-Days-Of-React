import React from 'react';
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import Nav from './Components/Nav'
import ExamplePortfolio from './Components/ExamplePortfolio';
import Hexadecimal from './Components/ColourGenerator';
import Home from './Components/Home';
import ColourCoder from './Components/ColourCoder';
import BarChart from './Components/BarChart';
import { themeContext } from "./Contexts/themeContext";
import Theme from './Components/Theme';
import CountryGenerator from './Components/CountryGenerator';
import Seasons from './Components/Seasons';

function App() {


  const [theme, setTheme] = useState('light')

  return (
    <div className={`App-${theme}`}>
      <themeContext.Provider value={[theme, setTheme]}>
      <Header />
      <Nav />
      <Theme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example-portfolio" element={<ExamplePortfolio />} />
          <Route path="/colour-generator" element={<Hexadecimal />} />
          <Route path ="/colour-coding" element={<ColourCoder />} />
          <Route path ="/bar-chart" element={<BarChart />} />
          <Route path ="/country-generator" element={<CountryGenerator />} />
          <Route path ="/season" element={<Seasons />} />
        </Routes>
        </themeContext.Provider>
    </div>
  );
}

export default App
