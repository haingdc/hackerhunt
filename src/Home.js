import React, { Component } from "react";
import List from "./List";
import TopicList from "./TopicList";
import { topics } from "./data";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <TopicList topics={topics} />
        <List />
      </React.Fragment>
    );
  }
}

export default Home;
