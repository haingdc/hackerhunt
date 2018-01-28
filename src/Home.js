import React, { Component } from "react";
import List from "./List";
import TopicList from "./TopicList";
import { topics } from "./data";
import * as API from "./api/index";
import request from "request";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  fetchArticles = page => {
    API.getArticles(page).then(res => {
      this.setState({ articles: res.data });
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <React.Fragment>
        <TopicList topics={topics} />
        <List articles={articles} fetchArticles={this.fetchArticles} />
      </React.Fragment>
    );
  }
}

export default Home;
