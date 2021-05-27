import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import collectionReducer from "./store/reducers/collection";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    collection: collectionReducer,
  }),
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
