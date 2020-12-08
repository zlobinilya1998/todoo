import appReducer from "./app-reducer";
import { createStore } from "redux";

const store = createStore(appReducer);

export default store;

window.store = store;
