import React, { Component } from "react";
import { connect } from "react-redux";

class Article extends Component {
  render() {
    return (
      <div className={"article"}>
        <div class="uk-margin-medium uk-card uk-card-default uk-card-body">
          <article class="uk-article">
            {this.props.heading ? (
              <h1 class="uk-article-title">
                <a class="uk-link-reset" href="">
                  {this.props.heading}
                </a>
              </h1>
            ) : null}
            {this.props.info ? (
              <p class="uk-article-meta">
                Written by <a href="#">Super User</a> on 12 April 2012. Posted
                in <a href="#">Blog</a>
              </p>
            ) : null}
            <p class="uk-text-lead">{this.props.t1}</p>
            <p>{this.props.t2}</p>
          </article>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
