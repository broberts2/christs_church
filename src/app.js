import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router";
import { history } from "./store";

import Home from "./components/home";
import Faq from "./components/faq";
import Video from "./components/video";
import Sermons from "./components/sermons";
import AboutUs from "./components/about_us";
import Bulletin from "./components/bulletin";
import ContactUs from "./components/contact_us";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/learn_more" component={Faq} />
          <Route exact path="/resources" component={Sermons} />
          <Route exact path="/events" component={Bulletin} />
          <Route exact path="/contact_us" component={ContactUs} />
        </div>
      </Router>
    );
  }
}
