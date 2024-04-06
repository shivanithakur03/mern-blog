import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Home/> 
    
  
    </div>
  </React.StrictMode>
);


reportWebVitals();
