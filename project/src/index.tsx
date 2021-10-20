import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Settings = {
  PLACES_TO_STAY: 300,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesToStay={Settings.PLACES_TO_STAY}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
