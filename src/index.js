import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { NumberProvider } from './context/NumberProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberProvider>
      <App />
    </NumberProvider>
  </React.StrictMode>
);