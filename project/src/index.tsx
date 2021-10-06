import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  PLACES_TO_STAY: 300,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesToStay={Settings.PLACES_TO_STAY} />
  </React.StrictMode>,
  document.getElementById('root'));
