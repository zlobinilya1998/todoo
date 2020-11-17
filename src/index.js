import React from "react";
import ReactDOM from "react-dom";

import { App, Nav, Users } from "./ComponentsStore";
import { navLinks, questions } from "./State.js";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

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
