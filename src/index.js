import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import { Auth0Provider } from "@auth0/auth0-react";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  
  <Provider store={store}>
     <Auth0Provider
    domain="baysel.eu.auth0.com"
    clientId="mn4AhpYo1mtPT5xasRGWD9BP83O5ygxD"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
