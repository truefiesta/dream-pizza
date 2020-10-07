import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app.jsx";
// eslint-disable-next-line no-unused-vars
import index from "./styles/index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
