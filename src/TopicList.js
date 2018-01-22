import React, { Component } from "react";
import "./TopicList.css";
class TopicList extends Component {
  render() {
    const { topics } = this.props;
    const liElems = topics.map(function(topic, index) {
      return (
        <div key={index} className="topic">
          <a href="/">
            <span className={`thumb ${topic.className}`} />
            {topic.title}
          </a>
        </div>
      );
    });
    return (
      <aside>
        <nav>{liElems}</nav>
      </aside>
    );
  }
}

export default TopicList;
