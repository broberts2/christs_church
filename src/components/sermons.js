import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MediaPlayer from "./media_player";
import Divider from "./divider";
import Fade from "react-reveal/Fade";
import config from "../config";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ScaleLoader } from "react-spinners";
import { css } from "emotion";
import "react-tabs/style/react-tabs.css";

import api from "../api";

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

class Sermons extends Component {
  state = {
    service: "",
    title: "",
    mediaUrl: "",
    mediaDate: "",
    tabIndex: 0,
    columnIndex: 0,
    rows: <div />,
    mediaObject: null,
    playingId: ""
  };

  async aquireMedia() {
    const mediaObject = await api.fetchContent();
    this.setState({ mediaObject });
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

  populate(i, newState = {}) {
    if (this.state.mediaObject) {
      const data = Object.values(this.state.mediaObject).map(el => el.children);
      const rows = data[i].map((el, i) => (
        <Row
          el={el}
          playingId={this.state.playingId}
          cb={el => this.selectRow(el)}
        />
      ));
      this.setState(Object.assign({ rows, tabIndex: i }, newState));
    }
  }

  componentDidMount() {
    (async () => {
      await this.aquireMedia();
      await this.populate(0);
      this.selectRow(this.state.mediaObject[0].children[0]);
    })();
  }

  render() {
    return (
      <div>
        <Header />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"sermons"}>
            <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
              <article class="uk-article">
                <MediaPlayer
                  url={this.state.mediaUrl}
                  date={this.state.mediaDate}
                  title={this.state.service}
                  subTitle={this.state.title}
                />
                <Divider />
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
