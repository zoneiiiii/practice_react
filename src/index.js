import React from "react";
import ReactDOM from "react-dom/client"; //React's library to talk to web browsers(React DOM)
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
