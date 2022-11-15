import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from 'redux/store';

import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="slim-mom">
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
