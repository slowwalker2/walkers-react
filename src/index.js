import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
const dotenv = require('dotenv');

if (process.env && process.env.NODE_ENV) {
  dotenv.config({ path: '.env.' + process.env.NODE_ENV });
} else {
  dotenv.config({ path: '.env.development' });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
