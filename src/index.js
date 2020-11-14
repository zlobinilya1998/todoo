import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import Users from "./Components/Users/Users";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      {/* <Users /> */}
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
