import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import config from "../config";

import SoundImage from "../img/music_icon.png";
import PeopleImage from "../img/people_icon.png";
import GPSImage from "../img/gps_icon.png";
import AboutUsImage from "../img/about-us_icon.png";
import VideoImage from "../img/video_icon.png";
import EventsImage from "../img/events_icon.png";
import MailImage from "../img/mail_icon.png";
import PenImage from "../img/pen_icon.png";

export default class CardTable extends Component {
  setImage(str) {
    switch (str) {
      case "mail":
        return MailImage;
      case "events":
        return EventsImage;
      case "video":
        return VideoImage;
      case "sound":
        return SoundImage;
      case "written":
        return PenImage;
      case "people":
        return PeopleImage;
      case "gps":
        return GPSImage;
      case "about_us":
        return AboutUsImage;
      default:
        return "";
    }
  }

  tableElement(cardTitle, text, img, cb) {
    return (
      <td>
        <div className={"card"} onClick={cb ? () => cb() : null}>
          <div class="uk-animation-toggle" tabindex="0">
            <div class="uk-card uk-card-secondary uk-card-body uk-animation-slide-top-small">
              <div style={{ minHeight: "135px" }}>
                <div className={"img-wrapper"}>
                  {img.length > 0 ? <img src={this.setImage(img)} /> : null}
                </div>
                <h3 class="uk-card-title">{cardTitle}</h3>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </td>
    );
  }

  tableRows(elements, rowSize) {
    let row = [];
    let grid = [];
    elements.map((el, i) => {
      row.push(this.tableElement(el.title, el.text, el.imgType, el.cb));
      if ((i + 1) % rowSize === 0) {
        grid.push(<tr>{row}</tr>);
        row = [];
      }
    });
    if (row.length > 0) {
      grid.push(<tr>{row}</tr>);
    }
    return grid;
  }

  render() {
    return (
      <div className={"card-table"}>
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <table style={{ width: "100%" }}>
            <tbody>
              {this.tableRows(this.props.elements, this.props.perRow)}
            </tbody>
          </table>
        </Fade>
      </div>
    );
  }
}
