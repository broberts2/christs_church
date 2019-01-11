import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return <div>Footer</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
