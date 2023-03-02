import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MuiDrawer from './MuiDrawer';

const tabsList = ["Equity" , "Bonds" , "Derivatives"];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App tab={tabsList} />
  </React.StrictMode>
);

