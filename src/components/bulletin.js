import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import api from "../api";
import Fade from "react-reveal/Fade";
import config from "../config";

class EventCard extends Component {
  render() {
    return (
      <div className={"event-card"}>
        <div class="uk-card uk-card-default uk-card-body">
          <div className={"content"}>
            <div>
              <h2>{this.props.data.title}</h2>
            </div>
            <div>
              <h3>{this.props.data.date}</h3>
            </div>
            <div>
              <p>{this.props.data.description}</p>
            </div>
          </div>
          <div className={"image"}>
            {this.props.data.img !== "nil" ? (
              <img src={require(`../img/${this.props.data.img}.png`)} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

class Bulletin extends Component {
  state = {
    events: {}
  };

  componentDidMount() {
    const fn = async () => {
      let events = await api.fetchContent();
      events = await api.getBulletin(events.Events.children);
      this.setState({ events });
    };
    fn();
  }

  render() {
    return (
      <div>
        <Header />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"bulletin"}>
            <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
              <article class="uk-article">
                <h1 class="uk-article-title">
                  <a class="uk-link-reset" href="">
                    Events
                  </a>
                </h1>
                <div className={"title-text"} style={{ marginBottom: "45px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                {Object.values(this.state.events).map(el => (
                  <EventCard data={el} />
                ))}
              </article>
            </div>
          </div>
        </Fade>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bulletin);
