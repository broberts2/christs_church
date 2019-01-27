import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import PersonelCardTable from "./personel_card_table";
import Divider from "./divider";
import Header from "./header";
import Footer from "./footer";
import Article from "./article";
import { connect } from "react-redux";
import people from "../people.js";
import config from "../config.js";

class Congregation extends Component {
  render() {
    return (
      <div className={"contact_us"}>
        <Header />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <Article
            t1={`Congregation of Christ's Church Missoula`}
            t2={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`}
          />
        </Fade>
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <Divider />
          <PersonelCardTable perRow={3} elements={Object.values(people)} />
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
)(Congregation);
