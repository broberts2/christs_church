import React, { Component } from "react";
import { connect } from "react-redux";
import ReactModal from "react-awesome-modal";

class Modal extends Component {
  formatDate(str) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const date = new Date(str);
    return (
      monthNames[date.getMonth()] +
      " " +
      date.getDate() +
      ", " +
      date.getFullYear()
    );
  }

  render() {
    return (
      <div className={"modal"}>
        {this.props.modalData ? (
          <ReactModal
            visible={this.props.modalData ? true : false}
            width="75%"
            effect="fadeInUp"
            onClickAway={() => this.props.setModalData(null)}
          >
            <div className={"body"}>
              <h1>{this.props.modalData.title}</h1>
              <div className={"content"}>
                <p>{this.props.modalData.location}</p>
                <p>
                  {this.props.modalData.start === this.props.modalData.end
                    ? `${this.formatDate(this.props.modalData.start)}`
                    : `${this.formatDate(
                        this.props.modalData.start
                      )} - ${this.formatDate(this.props.modalData.end)}`}
                </p>
                <p>
                  {this.props.modalData.startTime} -{" "}
                  {this.props.modalData.endTime}
                </p>
                <h4>{this.props.modalData.description}</h4>
              </div>
              <div className={"close"}>
                <a
                  href="javascript:void(0);"
                  onClick={() => this.props.setModalData(null)}
                >
                  Close
                </a>
              </div>
            </div>
          </ReactModal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
