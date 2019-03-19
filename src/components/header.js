import React, { Component } from "react";
import { connect } from "react-redux";
import NavLinks from "./nav_links";
import config from "../config";
import ReactModal from "react-awesome-modal";
import Cookies from "js-cookie";

import api from "../api";

import Img from "../img/cross.svg";

class Modal extends Component {
  render() {
    return (
      <ReactModal
        visible={this.props.show}
        width="75%"
        effect="fadeInUp"
        onClickAway={() => this.props.setModal(null)}
      >
        {this.props.data ? (
          <div className={"announcement-modal"}>
            <h1>{this.props.data.title}</h1>
            <p>{this.props.data.description}</p>
            <center>
              <div className={"button"}>
                <button
                  class="uk-button uk-button-secondary uk-width-1-1"
                  onClick={() => this.props.setModal(null)}
                >
                  Got it!
                </button>
              </div>
            </center>
          </div>
        ) : (
          <div />
        )}
      </ReactModal>
    );
  }
}

class Header extends Component {
  state = {
    modal: null
  };

  componentDidMount() {
    if (config.autoScrollToTop && !this.props.ignoreScroll) {
      window.scrollTo(0, 0);
    }
    if (!Cookies.get("announcement")) {
      const fn = async () => {
        let events = await api.fetchContent();
        events = await api.getAnnouncement(events.Announcement.children);
        this.setState({
          modal: events
        });
      };
      fn();
      Cookies.set("announcement", "true", { expires: 1 });
    }
  }

  render() {
    return (
      <div className={"header"}>
        <div style={this.state.modal ? {} : { pointerEvents: "none" }}>
          <Modal
            data={this.state.modal}
            show={this.state.modal ? true : false}
            setModal={boolean => this.setState({ modal: boolean })}
          />
        </div>
        <nav className={"uk-navbar-container"} ukNavbar>
          <div className={"uk-padding-small"}>
            <div className={"nav-bar"}>
              <div class="uk-position-center-right">
                <NavLinks />
              </div>
            </div>
            <div className={"wrapper"}>
              <h3 onClick={() => (window.location = "/")}>{document.title}</h3>
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
