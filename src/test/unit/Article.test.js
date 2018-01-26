import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import Article from "../../components/Article";
import { articles as articlesMock } from "../../data";

describe("Article", () => {
  it("the children of <article> tag should be <a> tag and <div> tag", () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find("article > a")).to.have.length(1);
    expect(wrapper.find("article > a + div")).to.have.length(1);
  });

  it("should display vote sign", () => {
    const articles = [...articlesMock.data];
    articles[0].votes = "5";
    const wrapper = shallow(<Article />);
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
});
