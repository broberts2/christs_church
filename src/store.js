import { createStore, compose, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import templateReducer from "./reducers/template_reducer";

export const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  templateReducer,
  composeEnhancer(applyMiddleware(middleware))
);

export default store;
