import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import Header from "./header";
import Footer from "./footer";
import PersonelCardTable from "./personel_card_table";
import Article from "./article";
import Divider from "./divider";
import CardTable from "./card_table";
import config from "../config";
import people from "../people";

import Img from "../img/msla.png";
import BgImg1 from "../img/music_icon.png";

class Home extends Component {
  render() {
    return (
      <div className={"home"}>
        <Header />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"uk-section-default"}>
            <div
              className={"uk-section uk-light uk-background-cover"}
              style={{
                backgroundImage: `url(${Img})`,
                textAlign: "center",
                backgroundAttachment: "fixed"
              }}
            >
              <div className={"uk-animation-toggle"} tabindex={"0"}>
                <h1>Some really cool text goes here</h1>
                <h2>Some more really cool text goes here</h2>
                <button
                  className={"uk-button uk-button-primary uk-button-large"}
                >
                  Some text
                </button>
              </div>
            </div>
          </div>
        </Fade>
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"uk-section uk-section-muted"}>
            <div className={"uk-container"}>
              <h2>
                “Go therefore and make disciples of all the nations, baptizing
                them in the name of the Father and the Son and the Holy Spirit,
                teaching them to observe all that I commanded you; and lo, I am
                with you always, even to the end of the age.”
              </h2>
              <h4 style={{ fontStyle: "italic" }}>Matthew 28: 19, 20</h4>
            </div>
          </div>
          <Divider />
        </Fade>
        <CardTable
          perRow={3}
          elements={[
            {
              title: "Audio Resources",
              imgType: "sound",
              text: "Sunday Sermons and Bible Studies",
              cb: () => (window.location = "/sermons")
            },
            {
              title: "Congregation",
              imgType: "people",
              text: "Meet the team of Christ's Church Missoula",
              cb: () => (window.location = "/congregation")
            },
            {
              title: "About Us",
              imgType: "about_us",
              text: "Learn more about Christ's Church Missoula",
              cb: () => (window.location = "/about_us")
            },
            {
              title: "Location",
              imgType: "gps",
              text: "Find us on Google Maps",
              cb: () => (window.location = "/about_us?loc=true")
            }
          ]}
        />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <Divider />
          <Article
            t1={`Welcome to Christ's Church Missoula`}
            t2={`Thank you for visiting our site! This is a place to gain important spiritual information and training and to help equip the saints to continue on in the upward call in Christ Jesus. We invite you to see and hear various preaching and training materials. We will be posting this media on a constant basis. Join in on the discussions and lively debates if you like! We are always available for Bible studies. Contact us if you have any questions. We love to dig into the word and to see what it has to say. Truth seekers are always welcome! Please feel free to read more about us. Thanks! From all the Missoula saints.`}
          />
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
)(Home);
