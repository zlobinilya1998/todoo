import React from "react";
import ReactDOM from "react-dom";

import { App, Nav, Users } from "./Components/Redux/ComponentsStore";
import { state } from "./Components/Redux/State.js";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Nav links={state.Navigation.navLinks} />
        <Route path="/Board" render={() => <Users />} />
        <Route path="/Tasks" render={() => <App state={state.App} />} />
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
