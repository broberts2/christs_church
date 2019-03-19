import React, { Component } from "react";

import Img from "../img/music_icon-dark.png";

export default class MediaPlayer extends Component {
  render() {
    return (
      <div className={"media-player"}>
        <img src={Img} />
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
          <audio src={this.props.url} controls />
          <h3>{this.props.date}</h3>
        </div>
      </div>
    );
  }
}
