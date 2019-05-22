import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import Login from "./components/login";
import Vote from "./components/vote";
import Results from "./components/results";
import Profile from "./components/profile";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { login } from "./actions/login";

import "./css/main.css";
import "./css/nav.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

const Routing = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/vote" component={Vote} />
        <Route path="/results" component={Results} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
};
// ReactDOM.render(<Routing />, document.getElementById("app"));
ReactDOM.render(
  <Provider store={store}>
    <Routing />,
  </Provider>,
  document.getElementById("app")
);
