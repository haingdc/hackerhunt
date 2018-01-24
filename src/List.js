import React, { Component } from "react";
import HeaderList from "./components/HeaderList";

class List extends Component {
  render() {
    return (
      <div className="list">
        <HeaderList />
        <div />
        <footer />
      </div>
    );
  }
}

export default List;
