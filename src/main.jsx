import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { menuData, restaurantData } from './data/data.js';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App menuData={menuData} restaurantData={restaurantData} />
  </React.StrictMode>
);
