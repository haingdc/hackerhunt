import React, { Component } from "react";
import { articles } from "./data";

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    this.getArticles = this.getArticles.bind(this);
  }

  getArticles() {
    const data = [...articles["data"]];
    this.setState({ articles: data });
  }

  render() {
    return <div>ArticleContainer me here</div>;
  }
}

export default ArticleContainer;
