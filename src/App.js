import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import TopicList from "./TopicList";
import List from "./List";
import { topics } from "./data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <TopicList topics={topics} />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
