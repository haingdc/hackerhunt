import React, { Component } from "react";
import Article from "./components/Article";
import FakeArticleContainer from "./components/FakeArticleContainer";

class ArticleContainer extends Component {
  render() {
    const { loading, articles } = this.props;

    if (loading) {
      return <FakeArticleContainer />;
    }
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
