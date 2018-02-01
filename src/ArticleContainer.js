import React, { Component } from "react";
import Article from "./components/Article";
import FakeArticleContainer from "./components/FakeArticleContainer";

class ArticleContainer extends Component {
  render() {
    const { loading, articles } = this.props;
    console.log(`loading`, loading);

    if (loading) {
      return <FakeArticleContainer />;
    }

    if (articles.length === 0) {
      return <div>this is nothing</div>;
    }

    const articleElems = articles.map((val, ind) => {
      return <Article key={ind} data={val} />;
    });

    return <div>{articleElems}</div>;
  }
}

export default ArticleContainer;
