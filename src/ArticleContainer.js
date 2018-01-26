import React, { Component } from "react";
import { articles } from "./data";
import Article from "./components/Article";

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

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const articles = this.state.articles;
    const articleElems = articles.map((val, ind) => {
      return <Article key={ind} data={val} />;
    });

    if (articles.length === 0) {
      return <div>this is nothing</div>;
    }
    return <div>{articleElems}</div>;
  }
}

export default ArticleContainer;
