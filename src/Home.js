import React, { Component } from "react";
import List from "./List";
import TopicList from "./TopicList";
import { topics } from "./data";
import * as API from "./api/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], page: 0, errors: {}, loading: false };
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    this.fetchArticles(0);
  }

  fetchArticles(page) {
    API.getArticles(page)
      .then(res => {
        this.setState({
          articles: res.data.data,
          page: page,
          loading: false,
        });
      })
      .catch(err => {
        if (err.message === "Network Error") {
          const { errors } = this.state;
          errors.network = err;
          this.setState({ errors });
        }
      });
    this.setState({ loading: true });
  }

  previousDays = () => {
    const { page } = this.state;
    this.fetchArticles(page + 1);
  };

  render() {
    const { articles, page, loading } = this.state;
    return (
      <React.Fragment>
        <TopicList topics={topics} />
        <List
          articles={articles}
          page={page}
          fetchArticles={this.fetchArticles}
          previousDays={this.previousDays}
          loading={loading}
        />
      </React.Fragment>
    );
  }
}

export default Home;
