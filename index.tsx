
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
const pixelId = import.meta.env.VITE_META_PIXEL_ID;
if (pixelId) {
    ReactPixel.init(pixelId, undefined, options);
} else {
    console.error("Meta Pixel ID not found in environment variables.");
}

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
