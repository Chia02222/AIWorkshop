
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('1281008766590827', undefined, options);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
