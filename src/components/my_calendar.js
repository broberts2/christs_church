import React, { Component } from "react";
import { connect } from "react-redux";
import BigCalendar from "react-big-calendar";
import Header from "./header";
import Footer from "./footer";
import Modal from "./modal";
import api from "../api";
import moment from "moment";
import Fade from "react-reveal/Fade";
import config from "../config";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

class MyCalendar extends Component {
  state = {
    events: [],
    modalData: null
  };

  componentDidMount() {
    const fn = async () => {
      let events = await api.fetchContent();
      events = await api.getEvents(events.Events.children);
      this.setState({ events });
    };
    fn();
  }

  setModalData(modalData) {
    this.setState({ modalData });
  }

  render() {
    return (
      <div>
        <Header />
        <Modal
          modalData={this.state.modalData}
          setModalData={e => this.setModalData(e)}
        />
        <Fade delay={config.fadeDelay} duration={config.fadeDuration}>
          <div className={"my-calendar"}>
            <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
              <article class="uk-article">
                <h1 class="uk-article-title">
                  <a class="uk-link-reset" href="">
                    Events
                  </a>
                </h1>
                <p>{`Check out some events coming down the pipeline.`}</p>
              </article>
              <div className={"calendar"}>
                <BigCalendar
                  views={["month"]}
                  localizer={localizer}
                  events={this.state.events}
                  startAccessor="start"
                  endAccessor="end"
                  onSelectEvent={e => this.setModalData(e)}
                />
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
)(MyCalendar);
