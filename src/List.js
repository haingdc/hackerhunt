import React, { Component } from "react";
import HeaderList from "./components/HeaderList";
import ArticleContainer from "./ArticleContainer";
import "./List.css";

class List extends Component {
  onPreviousDays = event => {};

  render() {
    const { articles, fetchArticles } = this.props;
    const { page } = this.props;
    return (
      <div className="list-container">
        <HeaderList />
        <ArticleContainer articles={articles} fetchArticles={fetchArticles} />
        <footer>
          <a href={`/page/` + page} onClick={this.onPreviousDays}>
            PREVIOUS DAYS
          </a>
        </footer>
      </div>
    );
  }
}
[];

export default List;
