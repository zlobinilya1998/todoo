import React from "react";
import ReactDOM from "react-dom";

import { App, Nav, Users } from "./Components/Redux/ComponentsStore";
import { store } from "./Components/Redux/Store";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

export let rerenderTree = () => {
  ReactDOM.render(
    <>
      <BrowserRouter>
        <Nav />
        <Route path="/Board" render={() => <Users />} />
        <Route
          path="/Tasks"
          render={() => (
            <App
              state={store._state.App}
              dispatch={store.dispatch.bind(store)}
            />
          )}
        />
      </BrowserRouter>
    </>,
    document.getElementById("root")
  );
};
rerenderTree(store.getState());

store.subscribe(rerenderTree);
