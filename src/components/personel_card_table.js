import React, { Component } from "react";
import PersonelCard from "./personel_card";

export default class PersonelCardTable extends Component {
  tableRows(elements, rowSize) {
    let row = [];
    let grid = [];
    elements.map((el, i) => {
      if (i % rowSize === 0 && i > 0) {
        grid.push(<tr>{row}</tr>);
        row = [];
      }
      row.push(
        <td style={{ verticalAlign: "top" }}>
          <PersonelCard
            imageless={this.props.imageless}
            img={el.img}
            title={el.title}
            name={el.firstName + " " + el.lastName}
            text={el.favQuote}
            subText={el.subQuote}
            email={el.email}
            phoneNumber={el.phoneNumber}
          />
        </td>
      );
    });
    if (row.length > 0) {
      grid.push(<tr>{row}</tr>);
    }
    return grid;
  }

  render() {
    return (
      <div className={"personel-card-table"}>
        <table className={"uk-table"}>
          <tbody>
            {this.tableRows(this.props.elements, this.props.perRow)}
          </tbody>
        </table>
      </div>
    );
  }
}
