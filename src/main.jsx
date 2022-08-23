
import "./index.css";
import { OrthoApp } from "./orthoApp";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OrthoApp />
  </BrowserRouter>
);
