import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppRouter from "./components/appRouter";

ReactDOM.render(
  <React.StrictMode>
    <App children={<AppRouter />} />
  </React.StrictMode>,
  document.getElementById("root")
);
