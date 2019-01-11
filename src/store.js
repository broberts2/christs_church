import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import templateReducer from "./reducers/template_reducer";

export const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
let rootReducer = combineReducers({ templateReducer });

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(middleware))
);
