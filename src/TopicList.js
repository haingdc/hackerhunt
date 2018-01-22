import React, { Component } from "react";
import "./TopicList.css";
class TopicList extends Component {
  render() {
    const { topics } = this.props;
    const liElems = topics.map(function(topic, index) {
      let children;
      if (topic.children) {
        children = topic.children.map(function(child, i) {
          return (
            <div key={i} className="topic">
              <a href="/">
                <span className={`thumb ${child.className}`} />
                {child.title}
              </a>
            </div>
          );
        });
      }
      return (
        <div key={index} className="topic">
          <a href="/">
            <span className={`thumb ${topic.className}`} />
            {topic.title}
            {children}
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
