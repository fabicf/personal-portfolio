import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const TRACKING_ID = "G-Z29TKJE92X"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
