import React from "react";
import ReactDOM from "react-dom";
import { App, Nav, Users } from "./ComponentsStore";

import { BrowserRouter, Route } from "react-router-dom";

export let rerenderTree = (state) => {
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
};
