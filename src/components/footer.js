import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavLinks from "./nav_links";
import Modal from "./modal";

class Footer extends Component {
  render() {
    const date = new Date();
    return (
      <nav
        className={"uk-navbar-container"}
        style={{ marginBottom: "0px" }}
        ukNavbar
      >
        <div className={"uk-padding-small"}>
          <div className={"uk-text-left"} style={{ marginLeft: "5vw" }}>
            © {document.title} {date.getFullYear()}
            <div
              style={{
                float: "right",
                marginRight: "75px",
                marginTop: "-25px"
              }}
            >
              <NavLinks />
            </div>
          </div>
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
)(Footer);
