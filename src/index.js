import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { App, Nav, Users } from "./Components/Redux/ComponentsStore";
import { state } from "./Components/Redux/State";

import { BrowserRouter, Route } from "react-router-dom";

export let rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <>
        <BrowserRouter>
          <App state={state.App} />
          <Nav />
          <Route path="/Board" render={() => <Users />} />
          <Route path="/Tasks" render={() => <App state={state.App} />} />
        </BrowserRouter>
      </>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
rerenderTree(state);
