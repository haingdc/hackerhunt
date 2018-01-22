import React, { Component } from "react";
import "./TopicList.css";
class TopicList extends Component {
  render() {
    const { topics } = this.props;
    const liElems = topics.map(function(topic, index) {
      return (
        <li key={index}>
          <span className={`thumb ${topic.className}`} />
          {topic.title}
        </li>
      );
    });
    return (
      <aside>
        <ul>{liElems}</ul>
      </aside>
    );
  }
}

export default TopicList;
