import React, { Component } from "react";
import HeaderList from "./components/HeaderList";
import ArticleContainer from "./ArticleContainer";
import "./List.css";

class List extends Component {
  onPreviousDays = event => {
    event.preventDefault();
    this.props.previousDays();
  };

  render() {
    const { articles, fetchArticles, loading } = this.props;
    const prevPage = this.props.page + 1;
    return (
      <div className="list-container">
        <HeaderList />
        <ArticleContainer
          articles={articles}
          fetchArticles={fetchArticles}
          loading={loading}
        />
        <footer>
          <a href={`/page/` + prevPage} onClick={this.onPreviousDays}>
            PREVIOUS DAYS
          </a>
        </footer>
      </div>
    );
  }
}

export default List;
