import React, { Component } from "react";
import { connect } from "react-redux";

class Template extends Component {
  render() {
    return <div>TEMPLATE</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);
