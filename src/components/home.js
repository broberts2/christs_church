import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import Header from "./header";
import Footer from "./footer";
import PersonelCardTable from "./personel_card_table";
import Article from "./article";
import Divider from "./divider";
import CardTable from "./card_table";
import config from "./config";

import Img from "../img/msla.png";
import BgImg1 from "../img/music_icon.png";

class Home extends Component {
  render() {
    return (
      <div className={"home"}>
        <Header />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"uk-section-default"}>
            <div className={"announcement-container"}>
              <div
                className={"uk-section uk-light uk-background-cover"}
                style={{
                  backgroundImage: `url(${Img})`,
                  textAlign: "center",
                  backgroundAttachment: "fixed"
                }}
              >
                <div className={"uk-animation-toggle"} tabindex={"0"}>
                  <h1>Our Aim</h1>
                  <h2
                    style={{
                      paddingLeft: "350px",
                      paddingRight: "350px",
                      marginBottom: "50px"
                    }}
                  >
                    To present the objective truth of Jesus fairly, honestly,
                    compassionately and without compromise
                  </h2>
                  <button
                    onClick={() => (window.location = "/about_us")}
                    className={"uk-button uk-button-primary uk-button-large"}
                  >
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <Article
            t1={`Welcome to Christ's Church Missoula`}
            t2={`Thank you for visiting our site! This is a place to gain important spiritual information and training and to help equip the saints to continue on in the upward call in Christ Jesus. We invite you to see and hear various preaching and training materials. We will be posting this media on a constant basis. Join in on the discussions and lively debates if you like! We are always available for Bible studies. Contact us if you have any questions. We love to dig into the word and to see what it has to say. Truth seekers are always welcome! Please feel free to read more about us. Thanks! From all the Missoula saints.`}
          />
        </Fade>
        <CardTable
          perRow={4}
          elements={[
            {
              title: "Learn More",
              imgType: "about_us",
              text: "Learn More About Christ's Church Missoula",
              cb: () => (window.location = "/learn_more")
            },
            {
              title: "Resources",
              imgType: "video",
              text: "Check Out Our Last Sermon and Audio Files",
              cb: () => (window.location = "/resources")
            },
            {
              title: "Events",
              imgType: "events",
              text: "See What's Happening Soon",
              cb: () => (window.location = "/events")
            },
            {
              title: "Contact Us",
              imgType: "mail",
              text: "Get In Touch With Us",
              cb: () => (window.location = "/contact_us")
            }
          ]}
        />

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
