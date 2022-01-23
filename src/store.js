import { createStore } from "redux";
import { createBrowserHistory } from "history";
import reducer from "./reducers/index";
export const history = createBrowserHistory();

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;