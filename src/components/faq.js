import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import Divider from "./divider";
import Fade from "react-reveal/Fade";
import CardTable from "./card_table";
import config from "../config";

const qa = [
  {
    q: `Question 1`,
    a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    q: `Question 2`,
    a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    q: `Question 3`,
    a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    q: `Question 4`,
    a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  }
];

const our_approach = <div>our approach</div>;

class FAQ extends Component {
  state = {
    section: "our_approach"
  };

  renderRouter() {
    switch (this.state.section) {
      case "our_approach":
        return (
          <div>
            <h1>Our Approach</h1>
            <div className={"title-text"}>
              Faith follows fact. Biblical faith is the reuslt of an examination
              of the pertinant facts. It is the "conviction of things not seen"
              (Hebrews 11:1) based on the evidence already presented. For this
              reason we seek to strengthen our faith through greater
              understandin and the practice of those principles in our own
              lives. Truth must be known before it can be belived.
            </div>
          </div>
        );
      case "our_beliefs":
        return (
          <div>
            <h1>Our Beliefs</h1>
            <div className={"title-text"}>
              We have no human creeds. We belive the Scriptures were originally
              inerrant and continue so in as much as they have been accurately
              translated. The Bible teaches that a genuine Faith that Jesus is
              Lord/God is a prerequisite for relationship with God and produces:
              <ul>
                <li>
                  A confession before others of that same belief (Romans
                  10:9-10)
                </li>
                <li>Repentance from sin and (Luke 24:47)</li>
                <li>
                  An appeal to receive forgiveness of sins and the Holy Spirit
                  dweling within through immersion baptism (Acts 2:38, I Peter
                  3:21)
                </li>
                <li>
                  An empowered new creature with the potential to live
                  righteously (II 5:17)
                </li>
              </ul>
            </div>
          </div>
        );
      case "our_congregation":
        return (
          <div>
            <h1>Our Congregation</h1>
            <div className={"title-text"}>
              We're not a denomiation. We share bonds of fellowship with many
              other congregation throughout the country and beyond. We emphasize
              learning as a means to strengthen our faith/change ives. There are
              no bands, smoke machines, singles groups, coffee bar, or bounce
              house, just real people learning to love God and thei neighbor.
            </div>
          </div>
        );
      case "faq":
        return (
          <div>
            <h1>Facts and Questions</h1>
            <div className={"title-text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            {qa.map(el => (
              <div>
                <Divider />
                <h3>{el.q}</h3>
                <p>{el.a}</p>
              </div>
            ))}
          </div>
        );
      default:
        return <div />;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"faq"}>
            <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
              <article class="uk-article">
                <h1 class="uk-article-title">
                  <a class="uk-link-reset" href="">
                    Learn More
                  </a>
                </h1>
                <CardTable
                  perRow={4}
                  elements={[
                    {
                      title: "Our Approach",
                      imgType: "",
                      text: "",
                      cb: () => {
                        window.scrollTo({
                          top: 400,
                          left: 0,
                          behavior: "smooth"
                        });
                        this.setState({ section: "our_approach" });
                      }
                    },
                    {
                      title: "Our Beliefs",
                      imgType: "",
                      text: "",
                      cb: () => {
                        window.scrollTo({
                          top: 400,
                          left: 0,
                          behavior: "smooth"
                        });
                        this.setState({ section: "our_beliefs" });
                      }
                    },
                    {
                      title: "Our Congregation",
                      imgType: "",
                      text: "",
                      cb: () => {
                        window.scrollTo({
                          top: 400,
                          left: 0,
                          behavior: "smooth"
                        });
                        this.setState({ section: "our_congregation" });
                      }
                    },
                    {
                      title: "FAQ",
                      imgType: "",
                      text: "",
                      cb: () => {
                        window.scrollTo({
                          top: 400,
                          left: 0,
                          behavior: "smooth"
                        });
                        this.setState({ section: "faq" });
                      }
                    }
                  ]}
                />
                <Divider />
                {this.renderRouter()}
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
)(FAQ);
