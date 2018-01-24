import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div className="list">
        <header>
          <h3 className="topic-name">C</h3>
          <div className="sort">
            <select>
              <option value="trending">Trending</option>
              <option value="date">Date</option>
              <option value="votes">Votes</option>
              <option value="comments">Comments</option>
            </select>
          </div>
        </header>
        <div />
        <footer />
      </div>
    );
  }
}

export default List;
