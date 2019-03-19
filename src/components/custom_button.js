import React, { Component } from "react";
import { connect } from "react-redux";

class CustomButton extends Component {
  state = {
    checkmark: this.props.selected ? this.props.selected : false
  };

  click() {
    if (this.props.cb) {
      this.props.cb();
    }
    if (this.props.selected === undefined) {
      this.setState({ checkmark: !this.state.checkmark });
    }
  }

  render() {
    return (
      <div className={"custom_button"}>
        {this.state.checkmark ? (
          <div className={"checkmark"}>
            <span uk-icon="icon: check; ratio: 2" />
          </div>
        ) : null}
        <button onClick={() => this.click()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomButton);
