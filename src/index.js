import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRouter from "./routing/AppRouter";
import Modal from "react-modal";

// Define the app element (usually the root div of your app)
const appRoot = document.getElementById("root");

// Set the app element for react-modal
Modal.setAppElement(appRoot);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>
);
