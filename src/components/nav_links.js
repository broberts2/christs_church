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
            <Link to={"/congregation"}>{"Congregation"}</Link>
          </li>
          <li>
            <Link to={"/sermons"}>{"Sermons"}</Link>
          </li>
          <li>
            <Link to={"/about_us"}>{"About Us"}</Link>
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
