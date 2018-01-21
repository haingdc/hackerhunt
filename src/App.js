import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import TopicList from "./TopicList";
import ArticleContainer from "./ArticleContainer";
import { topics } from "./data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <TopicList topics={topics} />
          <ArticleContainer />
        </div>
      </div>
    );
  }
}

export default App;
