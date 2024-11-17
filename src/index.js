import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css"

// import './index.css';  // Optional: if you have a CSS file

const container = document.getElementById('calculator-grid');
const calculator_grid = ReactDOM.createRoot(container);
calculator_grid.render(<App/>)
