import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import sinon from "sinon";
import _ from "lodash";

import ArticleContainer from "../../ArticleContainer";
import Article from "../../components/Article";
import { articles as articlesMock } from "../../data";

Enzyme.configure({ adapter: new Adapter() });

describe("ArticleContainer", () => {
  it("should start with empty list", () => {
    const wrapper = shallow(<ArticleContainer articles={[]} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.instance().props.articles).to.eql([]);
  });

  it("should render 16 Articles", () => {
    const wrapper = shallow(<ArticleContainer articles={articlesMock.data} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find(Article)).to.have.length(16);
  });

  it("calls componentDidMount", () => {
    const articles = _.cloneDeep(articlesMock.data);
    sinon.spy(ArticleContainer.prototype, "componentDidMount");
    const wrapper = mount(
      <ArticleContainer articles={articles} fetchArticles={() => {}} />,
    );
    expect(ArticleContainer.prototype.componentDidMount.calledOnce).to.equal(
      true,
    );
  });
});
