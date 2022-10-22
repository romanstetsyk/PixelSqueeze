import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import "modern-normalize";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
