import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MediaPlayer from "./media_player";
import VideoPlayer from "./video_player";
import Divider from "./divider";
import Fade from "react-reveal/Fade";
import config from "../config";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ScaleLoader } from "react-spinners";
import CardTable from "./card_table";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/entry.webpack";
import { css } from "emotion";
import "react-tabs/style/react-tabs.css";
import api from "../api";
import { PDFReader } from "react-read-pdf";

class Row extends Component {
  render() {
    return (
      <tr
        style={{ cursor: "pointer" }}
        onClick={e => this.props.cb(this.props.el, this.props.index)}
      >
        <td width={"100px"}>
          {this.props.playingId === this.props.el.id ? <ScaleLoader /> : null}
        </td>
        <td>{this.props.el.name}</td>
        <td>{this.props.el.createdTime}</td>
      </tr>
    );
  }
}

class PDF extends Component {
  state = {
    download: false,
    opacity: 1,
    pdfImg: null
  };

  componentDidMount() {
    const pdf_scale = 0.4;
    (async () => {
      const url = this.props.url;
      this.setState({
        pdfImg: (
          <PDFReader url={require("../img/Sample.pdf")} scale={pdf_scale} />
        )
      });
    })();
  }

  render() {
    return (
      <a className={"pdf-wrapper"} href={`${this.props.url}`} target={"_blank"}>
        <div style={{ opacity: this.state.opacity }}>
          <h1>{this.props.name.replace(".pdf", "")}</h1>
          <h2>{`Posted: ${this.props.date}`}</h2>
        </div>
        <div
          className={"download"}
          style={{ opacity: this.state.opacity < 1 ? 1 : 0 }}
        >
          <span uk-icon="cloud-download" />
        </div>
        <div
          style={{ opacity: this.state.opacity }}
          className={"pdf"}
          onMouseEnter={() => this.setState({ opacity: 0.25 })}
          onMouseLeave={() => this.setState({ opacity: 1 })}
        >
          {this.state.pdfImg}
        </div>
      </a>
    );
  }
}

class Sermons extends Component {
  state = {
    render: "video",
    service: "",
    title: "",
    mediaUrl: "",
    mediaDate: "",
    tabIndex: 0,
    columnIndex: 0,
    rows: <div />,
    writtenRows: <div />,
    mediaObject: null,
    mediaObjectWritten: null,
    playingId: "",
    video: null,
    searchQuery: ""
  };

  async aquireMedia() {
    const mediaObject = await api.fetchContent();
    const audio = mediaObject.Audio;
    const video = mediaObject.Video.children[0];
    const written = mediaObject.Written;
    this.setState({
      mediaObject: audio.children,
      mediaObjectWritten: written.children,
      video
    });
  }

  selectRow(data) {
    if (data) {
      this.state.playingId = data.id;
      this.populate(this.state.tabIndex, {
        service: data.parentName,
        title: data.name,
        mediaUrl: data.webContentLink,
        mediaDate: data.createdTime
      });
    }
  }

  populate(tabIndex, newState = {}) {
    if (this.state.mediaObject) {
      let rows = [];
      let data = Object.values(this.state.mediaObject).map(el => el.children);
      if (this.state.searchQuery.length > 0) {
        data = data.filter(el => {
          if (
            el[0].name
              .toLowerCase()
              .includes(this.state.searchQuery.toLowerCase())
          ) {
            return el;
          }
        });
      }
      if (data[tabIndex]) {
        rows = data[tabIndex].map((el, i) => {
          return (
            <Row
              el={el}
              playingId={this.state.playingId}
              cb={el => this.selectRow(el)}
            />
          );
        });
      }
      this.setState(Object.assign({ rows, tabIndex }, newState));
    }
  }

  populate_written() {
    if (this.state.mediaObjectWritten) {
      let rows = [];
      let content = [];
      let newArray = this.state.mediaObjectWritten[this.state.tabIndex]
        .children;
      if (this.state.searchQuery.length > 0) {
        newArray = newArray.filter(el => {
          if (
            el.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
          ) {
            return el;
          }
        });
      }
      newArray.map((el, i) => {
        content.push(
          <td>
            <PDF url={el.webContentLink} name={el.name} date={el.createdTime} />
          </td>
        );
        if ((i + 1) % 4 === 0) {
          rows.push(<tr>{content}</tr>);
          content = [];
        }
      });
      if (content.length > 0) {
        rows.push(<tr>{content}</tr>);
      }
      const writtenRows = <tbody>{rows}</tbody>;
      this.setState({ writtenRows });
    }
  }

  componentDidMount() {
    (async () => {
      await this.aquireMedia();
      await this.populate(0);
      await this.populate_written(0);
      this.selectRow(this.state.mediaObject[0].children[0]);
    })();
  }

  renderRouter() {
    switch (this.state.render) {
      case "video":
        return (
          <div>
            {this.state.video ? (
              <VideoPlayer
                url={this.state.video.webContentLink}
                description={this.state.video.description}
                name={this.state.video.name}
                date={this.state.video.createdTime}
              />
            ) : (
              <div />
            )}
          </div>
        );
      case "written":
        return (
          <div style={{ position: "relative" }}>
            <h2>Written resources</h2>
            <div className={"inner-man-button-written"}>
              <a href={"/contact_us"}>
                <button
                  className={"uk-button uk-button-secondary"}
                  style={{ height: "125px" }}
                >
                  <div style={{ width: "250px" }}>
                    Subscribe to weekly missoula bulletin
                  </div>
                </button>
              </a>
            </div>
            <div className={"search-bar"}>
              <div className={"uk-margin"}>
                <input
                  className={"uk-input"}
                  type={"text"}
                  placeholder={"Search"}
                  onChange={e => {
                    this.state.searchQuery = e.target.value;
                    this.populate_written();
                  }}
                />
                <p>Search by title.</p>
              </div>
            </div>
            {this.state.mediaObjectWritten ? (
              <Tabs
                defaultIndex={0}
                onSelect={tabIndex => {
                  this.state.tabIndex = tabIndex;
                  this.populate_written();
                }}
              >
                <TabList>
                  {Object.values(this.state.mediaObjectWritten).map(el => (
                    <Tab>{el.name}</Tab>
                  ))}
                </TabList>
              </Tabs>
            ) : null}
            <div style={{ textAlign: "center" }}>
              <table class="uk-table uk-table-divider">
                {this.state.writtenRows}
              </table>
            </div>
          </div>
        );
      case "audio":
        return (
          <div style={{ position: "relative" }}>
            <h2>Check out past sermons, studies, and devotions!</h2>
            <MediaPlayer
              url={this.state.mediaUrl}
              date={this.state.mediaDate}
              title={this.state.service}
              subTitle={this.state.title}
            />
            <div className={"inner-man-button"}>
              <a href={"http://innermanradio.org/"} target={"_blank"}>
                <button className={"uk-button uk-button-secondary"}>
                  Inner Man Radio
                </button>
              </a>
            </div>
            <Divider />
            <div className={"search-bar"}>
              <div className={"uk-margin"}>
                <input
                  className={"uk-input"}
                  type={"text"}
                  placeholder={"Search"}
                  onChange={e => {
                    this.state.searchQuery = e.target.value;
                    this.populate(this.state.tabIndex);
                  }}
                />
                <p>Search by title.</p>
              </div>
            </div>
            {this.state.mediaObject ? (
              <Tabs defaultIndex={0} onSelect={i => this.populate(i)}>
                <TabList>
                  {Object.values(this.state.mediaObject).map(el => (
                    <Tab>{el.name}</Tab>
                  ))}
                </TabList>
              </Tabs>
            ) : null}
            <table class="uk-table uk-table-hover uk-table-divider">
              <thead>
                <tr>
                  <th width={"100px"} />
                  <th>Title</th>
                  <th>Date Posted</th>
                </tr>
              </thead>
              <tbody>{this.state.rows}</tbody>
            </table>
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
          <div className={"sermons"}>
            <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
              <article class="uk-article">
                <h1 class="uk-article-title">
                  <a class="uk-link-reset" href="">
                    Resources
                  </a>
                </h1>
                <CardTable
                  perRow={3}
                  elements={[
                    {
                      title: "Sunday Message",
                      imgType: "video",
                      cb: () => {
                        window.scrollTo({
                          top: 525,
                          left: 0,
                          behavior: "smooth"
                        });
                        this.setState({ render: "video" });
                      }
                    },
                    {
                      title: "Written Resources",
                      imgType: "written",
                      cb: () => {
                        window.scrollTo({
                          top: 525,
                          left: 0,
                          behavior: "smooth"
                        });
                        this.setState({ render: "written" });
                      }
                    },
                    {
                      title: "Audio Files",
                      imgType: "sound",
                      cb: () => {
                        window.scrollTo({
                          top: 525,
                          left: 0,
                          behavior: "smooth"
                        });
                        this.setState({ render: "audio" });
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
)(Sermons);
