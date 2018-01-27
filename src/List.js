import React, { Component } from "react";
import HeaderList from "./components/HeaderList";
import ArticleContainer from "./ArticleContainer";
import "./List.css";

class List extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className="list-container">
        <HeaderList />
        <ArticleContainer />
        <footer>
          <a href={`/page/` + page}>PREVIOUS DAYS</a>
        </footer>
      </div>
    );
  }
}
[];

export default List;
