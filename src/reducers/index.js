import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import cart from "./cart";
import login from "./login";

export default combineReducers({
  routerReducer,
  cart,
  login
});
