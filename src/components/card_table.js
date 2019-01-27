import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import config from "../config";

export default class CardTable extends Component {
  tableElement(cardTitle, text, cb) {
    return (
      <td>
        <div className={"card"} onClick={cb ? () => cb() : null}>
          <div class="uk-animation-toggle" tabindex="0">
            <div class="uk-card uk-card-secondary uk-card-body uk-animation-slide-top-small">
              <h3 class="uk-card-title">{cardTitle}</h3>
              <p>{text}</p>
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
      row.push(this.tableElement(el.title, el.text, el.cb));
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
          <table class="uk-table uk-table-middle">
            <tbody>
              {this.tableRows(this.props.elements, this.props.perRow)}
            </tbody>
          </table>
        </Fade>
      </div>
    );
  }
}
