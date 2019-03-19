import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Fade from "react-reveal/Fade";
import config from "../config";
import { connect } from "react-redux";
import VideoPlayer from "./video_player";
import api from "../api";

class Video extends Component {
  state = {
    video: null
  };

  async aquireMedia() {
    const mediaObject = await api.fetchContent();
    const video = mediaObject.Video.children[0];
    this.setState({ video });
  }

  componentDidMount() {
    this.aquireMedia();
  }

  render() {
    return (
      <div>
        <Header />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"video"}>
            <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
              <article class="uk-article">
                {this.state.video ? (
                  <VideoPlayer
                    url={this.state.video.webContentLink}
                    description={this.state.video.description}
                    name={this.state.video.name}
                    date={this.state.video.createdTime}
                  />
                ) : (
                  <div />
                )}
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
)(Video);
