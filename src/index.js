import React from "react";
import ReactDOM from "react-dom/client";
// bootstrap CSS:
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// font awesome
import "../node_modules/font-awesome/css/font-awesome.min.css";
// bootstrap js:
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import App from "./App";
import './App.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);




