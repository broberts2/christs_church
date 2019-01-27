import React, { Component } from "react";

import api from "../api";

export default class MediaPlayer extends Component {
  render() {
    return (
      <div className={"media-player"}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
        <audio src={this.props.url} autoPlay controls />
        <h3>{this.props.date}</h3>
      </div>
    );
  }
}
