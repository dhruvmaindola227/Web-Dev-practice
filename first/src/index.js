import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';   
import { Provider } from 'react-redux';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// ** Provider makes sure that the entire application has the things it has. 
// ** For example the store we provide to it will be available for use throughout the application because of the "Provider".  
  <Provider store={store}>
    <App />
  </Provider>
);

