import { createStore } from "redux";
import calReducer from "./reducer";

const store = createStore(calReducer);

export default store;