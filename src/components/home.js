import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className={
            "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
          }
          data-src={"./img/family_stock_photo.jpg"}
          uk-img
        >
          <h1>Background Image</h1>
        </div>
        <div class="uk-section uk-section-muted">
          <div class="uk-container">
            <h3>Section</h3>

            <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
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
)(Home);
