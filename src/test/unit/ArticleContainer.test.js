import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import HeaderList from "../../components/HeaderList";
import List from "../../List";
import ArticleContainer, { Article } from "../../ArticleContainer";
import { articles } from "../../data";

Enzyme.configure({ adapter: new Adapter() });

describe("ArticleContainer", () => {
  it("should start with empty list", () => {
    const wrapper = shallow(<ArticleContainer />);
    expect(wrapper.state("articles")).to.eql([]);
  });

  it("get articles", () => {
    const wrapper = mount(<ArticleContainer />);
    wrapper.instance().getArticles();
    wrapper.update();
    expect(wrapper.state("articles")).to.eql(articles.data);
    expect(wrapper.find(Article)).to.have.length(16);
  });
});
