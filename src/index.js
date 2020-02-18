import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { allReducer } from "./Reducers";
import Thunk from "redux-thunk";

const store = createStore(allReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
