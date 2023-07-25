import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const saludar = {
  age: 8,
};
ReactDOM.render(
  <App name="Feli" saludar={saludar} />,
  document.getElementById("root")
);
