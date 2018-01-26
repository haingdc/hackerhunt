import React from "react";

const Article = props => {
  const { votes, comments } = props.data;
  return (
    <article>
      <a href="#">
        <span>
          <em>▲</em>
          {votes}
        </span>
        <span>{comments}</span>
      </a>
      <div>Article</div>
    </article>
  );
};

export default Article;
