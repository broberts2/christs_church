import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Img from "../img/placeholder_logo.svg";

class Header extends Component {
  render() {
    return (
      <nav className={"uk-navbar-container"} uk-navbar>
        <div className={"uk-navbar-right"}>
          <ul className={"uk-navbar-nav"}>
            <li>
              <div>
                <img src={Img} width={"75px"} uk-svg />
                <span className={"uk-text-middle"}>
                  Christ's Church in the Clarkfork
                </span>
              </div>
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Link1</Link>
            </li>
            <li>
              <Link to={"/"}>Link2</Link>
            </li>
            <li>
              <Link to={"/"}>Link3</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
