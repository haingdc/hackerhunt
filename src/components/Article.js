import React from "react";

const Article = props => {
  const { votes } = props.data;
  return (
    <article>
      <a href="#">
        <span>
          <em>▲</em>
          {votes}
        </span>
        <span>
          <em />
        </span>
      </a>
      <div>Article</div>
    </article>
  );
};

export default Article;
