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
        <span>
          <em>
            {/* prettier-ignore */}
            <svg class="comment-12" width="12" height="12" xmlns="http://www.w3.org/2000/svg" data-reactid="88">
              <g data-reactid="89">
                <path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z" data-reactid="90" />
              </g>
            </svg>
          </em>
          {comments}
        </span>
      </a>
      <div>Article</div>
    </article>
  );
};

export default Article;
