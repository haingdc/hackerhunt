import React, { Component } from "react";
import FakeArticle from "./FakeArticle";

export default function FakeArticleContainer({ number = 5 }) {
  return (
    <div>
      {Array.from(Array(number)).map((article, i) => {
        return <FakeArticle key={i} />;
      })}
    </div>
  );
}
