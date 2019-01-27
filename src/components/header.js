import React, { Component } from "react";
import { connect } from "react-redux";
import NavLinks from "./nav_links";
import config from "../config";

import Img from "../img/cross.svg";

class Header extends Component {
  componentDidMount() {
    if (config.autoScrollToTop && !this.props.ignoreScroll) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className={"header"} onScroll={() => console.log("yolo")}>
        <nav className={"uk-navbar-container"} ukNavbar>
          <div className={"uk-padding-small"}>
            <div className={"nav-bar"}>
              <div class="uk-position-center-right">
                <NavLinks />
              </div>
            </div>
            <div>
              <h3 className={"uk-text-middle"}>{document.title}</h3>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
