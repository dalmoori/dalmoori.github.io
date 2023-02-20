import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globalStyle.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
);
