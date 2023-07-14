import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './/assets/index.css';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render( 
    <BrowserRouter>
    <App />
    </BrowserRouter>);