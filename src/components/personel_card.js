import React, { Component } from "react";

export default class PersonelCard extends Component {
  render() {
    const prettyNumber = this.props.phoneNumber
      ? "(" +
        this.props.phoneNumber.slice(0, 3) +
        ") " +
        this.props.phoneNumber.slice(3, 6) +
        "-" +
        +this.props.phoneNumber.slice(-4)
      : "";
    return (
      <div className={"personel"}>
        <div class="uk-card uk-card-secondary uk-card-hover uk-card-body">
          {this.props.imageless ? null : (
            <div className={"img"}>
              {this.props.img ? (
                <img src={this.props.img} />
              ) : (
                <div className={"alt"} uk-icon="icon: user; ratio: 6.5" />
              )}
            </div>
          )}
          <h3 class="uk-card-title">
            {this.props.name} ({this.props.title})
          </h3>
          <div className={"text-block"}>
            <p>{this.props.text}</p>
            <div className={"sub-text"}>
              <p>{this.props.subText}</p>
            </div>
          </div>
          <div className={"contact"}>
            {this.props.email ? (
              <div>
                <p>
                  <div uk-icon="mail" /> :{" "}
                  <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
                </p>
              </div>
            ) : null}
            {this.props.phoneNumber ? (
              <p>
                <div uk-icon="receiver" /> :{" "}
                <a href={`tel:${this.props.phoneNumber}`}>{prettyNumber}</a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
