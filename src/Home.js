import React, { Component } from "react";
import List from "./List";
import TopicList from "./TopicList";
import { topics } from "./data";
import * as API from "./api/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], page: 0, errors: {}, loading: true };
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    this.fetchArticles(0);
  }

  fetchArticles(page) {
    API.getArticles(page)
      .then(res => {
        this.setState({ articles: res.data.data, page: page });
      })
      .catch(err => {
        if (err.message === "Network Error") {
          const { errors } = this.state;
          errors.network = err;
          this.setState({ errors });
        }
      });
  }

  previousDays = () => {
    const { page } = this.state;
    this.fetchArticles(page + 1);
  };

  render() {
    const { articles, page } = this.state;
    return (
      <React.Fragment>
        <TopicList topics={topics} />
        <List
          articles={articles}
          page={page}
          fetchArticles={this.fetchArticles}
          previousDays={this.previousDays}
        />
      </React.Fragment>
    );
  }
}

export default Home;
