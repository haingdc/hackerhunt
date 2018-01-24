import React from "react";

const HeaderList = props => {
  return (
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
  );
};

export default HeaderList;
