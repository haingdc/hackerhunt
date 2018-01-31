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
    const articles = _.cloneDeep(articlesMock.data);
    const wrapper = shallow(<ArticleContainer articles={articles} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find(Article)).to.have.length(16);
  });
});

describe("ArticleContainer Loading...", () => {
  it("should display 'Loading...'", () => {
    const wrapper = shallow(<ArticleContainer loading={true} />);
    expect(wrapper.find("div").text()).to.equal("Loading...");
  });
});
