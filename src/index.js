import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Nav from "./Components/Nav/Nav";
import Users from "./Components/Users/Users";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

import { navLinks, questions } from "./Store.js";

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Nav links={navLinks} />
        <Route path="/Board" render={() => <Users />} />
        <Route path="/Tasks" render={() => <App questions={questions} />} />
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
