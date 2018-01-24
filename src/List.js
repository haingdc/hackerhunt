import React, { Component } from "react";
import HeaderList from "./components/HeaderList";
import ArticleContainer from "./ArticleContainer";

class List extends Component {
  render() {
    return (
      <div className="list">
        <HeaderList />
        <ArticleContainer />
        <footer />
      </div>
    );
  }
}

export default List;
