import React from "react";

export default function FakeArticle() {
  const votes = "loading...";
  const comments = "loading...";
  const title = "loading...";
  const desc = "loading...";
  const date = "loading...";
  const author = "loading...";
  const tags = "loading...";
  return (
    <article class="article-loading">
      <a href={"https://news.ycombinator.com/item?id="}>
        <span>
          <em>▲</em>
          {votes}
        </span>
        <span>
          <em>
            {/* prettier-ignore */}
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z"/>
              </g>
            </svg>
          </em>
          {comments}
        </span>
      </a>
      <div>
        <h2>
          <a href={"#"} target="_blank">
            {title}
          </a>
        </h2>
        <p>{desc}</p>
        <summary>
          <time>{date}</time>
          &nbsp;by&nbsp;
          <a href={"/author/"}>{author}</a>
          {tags}
        </summary>
      </div>
    </article>
  );
}
