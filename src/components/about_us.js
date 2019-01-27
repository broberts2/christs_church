import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import Fade from "react-reveal/Fade";
import Divider from "./divider";
import config from "../config";

import Img from "../img/cross.png";

class AboutUs extends Component {
  componentDidMount() {
    const query = new URLSearchParams(window.location.search).get("loc");
    query
      ? setTimeout(
          () => window.scrollTo({ top: 1225, left: 0, behavior: "smooth" }),
          0
        )
      : window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header ignoreScroll={true} />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"about-us"}>
            <div className={"uk-section-default"}>
              <div
                className={"uk-section uk-light uk-background-cover"}
                style={{
                  backgroundImage: `url(${Img})`,
                  textAlign: "center",
                  backgroundAttachment: "fixed"
                }}
              >
                <div className={"about-us-img"}>
                  <h2>
                    "For He made Him who knew no sin to be sin for us, that we
                    might become the righteousness of God in Him."
                  </h2>
                  <h3>2 Corinthians 5:21</h3>
                </div>
              </div>
            </div>
            <div className={"about-us-content"}>
              <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
                <article class="uk-article">
                  <h1 class="uk-article-title">
                    <a class="uk-link-reset" href="">
                      About Us
                    </a>
                  </h1>
                  <p>
                    {`Christ’s Church On the Clark Fork is another part of Christ’s
                body of believers that make up the temple of the living God
                (2 Corinthians 6:16) and the Kingdom of His Son. God does not
                dwell in a temple made with human hands and does not need us to
                build him something physical at which to worship Him – instead,
                God sent Jesus to the world to reconcile man to Himself enabling
                us, His children, to worship Him in Spirit and in Truth at all
                times (John 4:23). Our lives, every second of them, are living
                and holy sacrifices to Him, which is our spiritual service
                (Romans 12:1,2).`}
                  </p>
                  <p>
                    {`The focus of Christ’s church – Christ’s reason for establishing
                  His church – is to equip the saints to seek and save the lost on
                  a one-on-one basis.  While on earth, Jesus sent 70 disciples to
                  proclaim the coming Kingdom and later, after His triumphant
                  resurrection, commanded us in Matt 28:19-20 to “Go therefore and
                  make disciples of all the nations, baptizing them in the name of
                  the Father and the Son and the Holy Spirit, teaching them to
                  observe all that I commanded you….” We understand that Jesus is
                  talking to those who obey the scriptures – to all of those who
                  can be counted amongst His saints to carry out His will to seek
                  and save that which was lost.`}
                  </p>
                  <p>
                    {`Concerning salvation, God has established a clear plan in the
                  scriptures that not only saves the condemned to hell sinner from
                  eternal suffering, but frees them from sin. His plan is perfect,
                  His Word is perfect and no man, creed, or tradition can claim
                  higher authority than His Inspired (God-breathed) Word that
                  states that a person must:`}
                  </p>
                  <p>{`1. hear the Word (Romans 10:17)`}</p>
                  <p>{`2. believe in the Lord Jesus (Acts 16:31)`}</p>
                  <p>{`3. repent from their wicked ways and turn to God
                  (Acts 2:38, Luke 13:5)`}</p>
                  <p>{`4. confess with their mouth that Jesus is LORD (Acts 8:37,
                  Romans 10:9,10)`}</p>
                  <p>{`5. be immersed in water to wash away their sins and receive
                  the gift of the indwelling Holy
                  Spirit (Acts 2:38, Acts 22:16, 1 Peter 3:21)`}</p>
                  <p>{`6. remain faithful until death (Revelation 2:10).`}</p>
                </article>
              </div>
              <Divider />
              <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
                <article class="uk-article">
                  <h1 class="uk-article-title">
                    <a class="uk-link-reset" href="">
                      Location
                    </a>
                  </h1>
                  <iframe
                    src={
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.7137091432983!2d-114.05544988439561!3d46.849325479141754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dd20f0d1553a9%3A0xae52482c77ff0f6d!2s3020+South+Ave+W%2C+Missoula%2C+MT+59804!5e0!3m2!1sen!2sus!4v1548454088893"
                    }
                    width={"50%"}
                    height={"350"}
                    frameborder={"0"}
                    style={{ border: "1" }}
                    allowfullscreen
                  />
                  <div className={"location-block"}>
                    <h4>{document.title}</h4>
                    <p>{`3020 South Ave. W.`}</p>
                    <p>{`Missoula MT, 59804`}</p>
                    <p>
                      <a href={`mailto:mslabulletin@blackfoot.net`}>
                        mslabulletin@blackfoot.net
                      </a>
                    </p>
                    <p>
                      <a href={`tel:4065447600‎`}>(406) 544-7600‎</a>
                    </p>
                  </div>
                </article>
              </div>
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
)(AboutUs);
