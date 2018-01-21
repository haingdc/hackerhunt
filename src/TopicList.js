import React, { Component } from "react";

class TopicList extends Component {
  render() {
    const { topics } = this.props;
    const liElems = topics.map(function(v, i) {
      return <li key={i}>{v}</li>;
    });
    return (
      <aside>
        <ul>{liElems}</ul>
      </aside>
    );
  }
}

export default TopicList;
