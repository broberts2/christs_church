import React, { Component } from "react";
import { connect } from "react-redux";
import ReactModal from "react-awesome-modal";

class Modal extends Component {
  render() {
    return (
      <ReactModal
        visible={this.state.modalVisible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => this.setState({ modalVisible: false })}
      >
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <a
            href="javascript:void(0);"
            onClick={() => this.setState({ modalVisible: false })}
          >
            Close
          </a>
        </div>
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
