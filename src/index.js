import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import the reportWebVitals function

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the StrictMode wrapper for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app. You can send the results to an analytics endpoint.
reportWebVitals();
