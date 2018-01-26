import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import Article from "../../components/Article";
import { articles as articlesMock } from "../../data";

describe("Article", () => {
  it("the children of <article> tag should be <a> tag and <div> tag", () => {
    const article = [...articlesMock.data][0];
    const wrapper = shallow(<Article data={article} />);
    expect(wrapper.find("article > a")).to.have.length(1);
    expect(wrapper.find("article > a + div")).to.have.length(1);
  });

  it("should display vote sign", () => {
    const article = [...articlesMock.data][0];
    const wrapper = shallow(<Article data={article} />);
    expect(
      wrapper
        .find("article")
        .at(0)
        .find("span")
        .at(0)
        .find("em")
        .text(),
    ).to.equal("▲");
  });

  it("the vote number should be ▲5", () => {
    const article = { ...articlesMock.data[0] };
    article.votes = "5";
    const wrapper = shallow(<Article data={article} />);
    expect(
      wrapper
        .find("article")
        .at(0)
        .find("span")
        .at(0)
        .text(),
    ).to.equal("▲5");
  });

  it("the comment number should be 5", () => {
    const article = { ...articlesMock.data[0] };
    article.comments = "5";
    const wrapper = shallow(<Article data={article} />);
    expect(
      wrapper
        .find("article")
        .at(0)
        .find("span")
        .at(1)
        .text(),
    ).to.equal("5");
  });

  it("An article show display title", () => {
    const article = { ...articlesMock.data[0] };
    article.title = "All I want is you";
    const wrapper = shallow(<Article data={article} />);
    expect(
      wrapper
        .find("article > a + div")
        .at(0)
        .children("h2")
        .at(0)
        .text(),
    ).to.equal("All I want is you");
  });

  it("An article show display description", () => {
    const article = { ...articlesMock.data[0] };
    article.desc = "All I want is you";
    const wrapper = shallow(<Article data={article} />);
    expect(
      wrapper
        .find("article > a + div")
        .at(0)
        .children("p")
        .at(0)
        .text(),
    ).to.equal("All I want is you");
  });
});
