import React, { Component } from "react";

export default class VideoPlayer extends Component {
  render() {
    return (
      <div className={"video-player"}>
        <div className={"video-container"}>
          <h1>{this.props.name.replace(".mp4", "")}</h1>
          <video controls>
            <source src={this.props.url} type={"video/mp4"} />
          </video>
        </div>
        <div className={"text-block"}>
          <h3>Date Posted: {this.props.date}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
