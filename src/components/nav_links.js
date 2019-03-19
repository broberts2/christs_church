import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-awesome-modal";

class NavLinks extends Component {
  render() {
    return (
      <div>
        <ul className={"uk-navbar-nav"}>
          <li>
            <Link to={"/"}>{"Home"}</Link>
          </li>
          <li>
            <Link to={"/learn_more"}>{"Learn More"}</Link>
          </li>
          <li>
            <Link to={"/resources"}>{"Resources"}</Link>
          </li>
          <li>
            <Link to={"/events"}>{"Events"}</Link>
          </li>
          <li>
            <Link to={"/contact_us"}>{"Contact Us"}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLinks);
