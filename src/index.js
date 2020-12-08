import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { App, Nav, Users } from "./Components/Redux/ComponentsStore";
import store from "./Components/Redux/Store";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <Route path="/Board">
          <Users />
        </Route>
        <Route path="/Tasks">
          <App />
        </Route>
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
