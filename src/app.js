import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router";
import { history } from "./store";

import Home from "./components/home";
import Congregation from "./components/congregation";
import Sermons from "./components/sermons";
import AboutUs from "./components/about_us";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/congregation" component={Congregation} />
          <Route exact path="/sermons" component={Sermons} />
          <Route exact path="/about_us" component={AboutUs} />
        </div>
      </Router>
    );
  }
}
