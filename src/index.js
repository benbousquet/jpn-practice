import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App children={<p>Test</p>} />
  </React.StrictMode>,
  document.getElementById("root")
);
