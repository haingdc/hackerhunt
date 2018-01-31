import React from "react";
import dateFns from "date-fns";

const Article = props => {
  const { id, votes, comments, link, title, desc, author } = props.data;
  let { date, tags } = props.data;
  date = new Date(Number(date) * 1000);
  date = dateFns.distanceInWords(date, new Date()) + " ago";

  tags = tags.split(",");
  tags = tags.map((val, ind) => {
    val = val.trim();
    return (
      <a className="tag" href={`/topic/${val}/trending`} key={ind}>
        {val}
      </a>
    );
  });

  return (
    <article>
      <a href={"https://news.ycombinator.com/item?id=" + id}>
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
          <a href={link} target="_blank">
            {title}
          </a>
        </h2>
        <p>{desc}</p>
        <summary>
          <time>{date}</time>
          &nbsp;by&nbsp;
          <a href={"/author/" + author}>{author}</a>
          {tags}
        </summary>
      </div>
    </article>
  );
};

export default Article;
