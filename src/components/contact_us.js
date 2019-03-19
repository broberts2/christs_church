import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import CustomButton from "./custom_button";
import ReactModal from "react-awesome-modal";
import Fade from "react-reveal/Fade";
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/core";
import api from "../api";
import { connect } from "react-redux";

import config from "../config";

class Modal extends Component {
  render() {
    const override = css`
      border-color: red;
    `;
    let loader;
    switch (this.props.processing) {
      case 1:
        loader = (
          <center style={{ margin: "50px" }}>
            <GridLoader override={css} size={50} />
          </center>
        );
        break;
      case 2:
        loader = (
          <div>
            <span style={{ color: "green" }} uk-icon="icon: check; ratio: 7" />
            <h1>Message Received!</h1>
          </div>
        );
        break;
      case 3:
        loader = (
          <div>
            <span style={{ color: "red" }} uk-icon="icon: close; ratio: 7" />
            <h1>There was an error receiving your message.</h1>
          </div>
        );
        break;
    }
    return (
      <ReactModal
        visible={this.props.processing > 0 ? true : false}
        width="75%"
        effect="fadeInUp"
      >
        <div style={{ textAlign: "center" }}>{loader}</div>
      </ReactModal>
    );
  }
}

class ContactUs extends Component {
  state = {
    processing: 0,
    modalData: null,
    information: false,
    prayers: false,
    pbs: false,
    other: false,
    comment: "",
    name: "",
    phone: "",
    email: "",
    preferred: {
      call: false,
      text: false,
      email: false
    }
  };

  async submit(data) {
    const timeout = 3000;
    this.setState({ processing: 1 });
    const response = await api.contactUs(data);
    if (response === "success") {
      this.setState({ processing: 2 });
      setTimeout(() => {
        window.location.reload();
        window.scrollTo(0, 0);
      }, timeout);
    } else {
      this.setState({ processing: 3 });
      setTimeout(
        () =>
          this.setState({
            processing: 0
          }),
        timeout
      );
    }
  }

  checkSubmit() {
    if (
      this.state.name.length > 0 &&
      this.state.phone.length > 0 &&
      this.state.email.length > 0
    ) {
      return {};
    } else {
      return { opacity: "0.2", pointerEvents: "none" };
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Modal processing={this.state.processing} />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"contact_us"}>
            <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
              <article class="uk-article">
                <h1>Contact Us</h1>
                <h2>How can we help?</h2>
                <div className={"form"}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th align={"left"}>I'm looking for:</th>
                      <th align={"left"}>Reach me at:</th>
                    </tr>
                    <tr>
                      <td>
                        <div style={{ display: "inline-flex" }}>
                          <CustomButton
                            cb={() =>
                              this.setState({
                                information: !this.state.information
                              })
                            }
                          />{" "}
                          Information
                        </div>
                      </td>
                      <td>
                        <div className={"required"}>*</div> Name
                        <div className={"input"}>
                          <input
                            type={"text"}
                            onChange={e =>
                              this.setState({ name: e.target.value })
                            }
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div style={{ display: "inline-flex" }}>
                          <CustomButton
                            cb={() =>
                              this.setState({
                                prayers: !this.state.prayers
                              })
                            }
                          />{" "}
                          Prayers
                        </div>
                      </td>
                      <td>
                        <div className={"required"}>*</div> Phone
                        <div className={"input"}>
                          <input
                            type={"text"}
                            onChange={e =>
                              this.setState({ phone: e.target.value })
                            }
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div style={{ display: "inline-flex" }}>
                          <CustomButton
                            cb={() =>
                              this.setState({
                                pbs: !this.state.pbs
                              })
                            }
                          />{" "}
                          A personal bible study
                        </div>
                      </td>
                      <td>
                        <div className={"required"}>*</div> Email
                        <div className={"input"}>
                          <input
                            type={"text"}
                            onChange={e =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div style={{ display: "inline-flex" }}>
                          <CustomButton
                            cb={() =>
                              this.setState({
                                other: !this.state.other
                              })
                            }
                          />{" "}
                          Other
                        </div>
                      </td>
                      <td>
                        <div className={"required"}>
                          <div className={"sub"}>* Required field</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div style={{ margin: "50px" }} />
                    </tr>
                    <tr>
                      <th align={"left"}>Please explain:</th>
                      <th align={"left"}>Preferred:</th>
                    </tr>
                    <tr>
                      <td>
                        <div className={"input"}>
                          <textarea
                            onChange={e =>
                              this.setState({ comment: e.target.value })
                            }
                            rows={4}
                          />
                        </div>
                      </td>
                      <td>
                        <div>
                          <div style={{ display: "inline-flex" }}>
                            <CustomButton
                              cb={() => {
                                let state = this.state;
                                state.preferred.call = !this.state.preferred
                                  .call;
                                this.setState(state);
                              }}
                            />{" "}
                            Call
                          </div>
                        </div>
                        <div>
                          <div style={{ display: "inline-flex" }}>
                            <CustomButton
                              cb={() => {
                                let state = this.state;
                                state.preferred.text = !this.state.preferred
                                  .text;
                                this.setState(state);
                              }}
                            />{" "}
                            Text
                          </div>
                        </div>
                        <div>
                          <div style={{ display: "inline-flex" }}>
                            <CustomButton
                              cb={() => {
                                let state = this.state;
                                state.preferred.email = !this.state.preferred
                                  .email;
                                this.setState(state);
                              }}
                            />{" "}
                            Email
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div style={this.checkSubmit()}>
                        <button
                          class="uk-button uk-button-secondary"
                          onClick={() => this.submit(this.state)}
                        >
                          Submit
                        </button>
                      </div>
                    </tr>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </Fade>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUs);
