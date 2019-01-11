import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router";
import { history } from "./store";

import Home from "./components/home";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
