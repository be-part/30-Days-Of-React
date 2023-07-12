import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './Components/Header'; // Assuming Header is a default export
import User from './Components/User';
import TechImages from './Components/Images';
import Subscribe from './Components/Subscribe';
import Hexadecimal from './Components/Hexadecimal';

function App() {
  return (
    <div className='app'>
      <Header />
      <Hexadecimal />
      <User />
      <TechImages />
      <Subscribe />
    </div>
  );
}

const rootElement = document.getElementById('root');

createRoot(rootElement).render(<App />); // Rendering the App component as the root of the React application
