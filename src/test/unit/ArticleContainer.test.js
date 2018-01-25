import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import sinon from "sinon";
import ArticleContainer from "../../ArticleContainer";
import Article from "../../components/Article";
import { articles } from "../../data";

Enzyme.configure({ adapter: new Adapter() });

describe("ArticleContainer", () => {
  it("should start with empty list", () => {
    const wrapper = shallow(<ArticleContainer />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.state("articles")).to.eql([]);
  });

  it("get articles", () => {
    const wrapper = mount(<ArticleContainer />);
    wrapper.instance().getArticles();
    wrapper.update();
    expect(wrapper.state("articles")).to.eql(articles.data);
    expect(wrapper.find(Article)).to.have.length(16);
  });

  it("calls componentDidMount", () => {
    sinon.spy(ArticleContainer.prototype, "componentDidMount");
    const wrapper = mount(<ArticleContainer />);
    expect(ArticleContainer.prototype.componentDidMount.calledOnce).to.equal(
      true,
    );
  });
});
