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
    const articles = this.state.articles;
    const articleElems = articles.map((val, ind) => {
      return <Article key={ind} />;
    });

    if (articles.length === 0) {
      return <div>this is nothing</div>;
    }
    return <div>{articleElems}</div>;
  }
}

export const Article = props => {
  return <h3>this is an article</h3>;
};

export default ArticleContainer;
