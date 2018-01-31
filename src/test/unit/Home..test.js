import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import sinon from "sinon";
import _ from "lodash";

import Home from "../../Home";
import TopicList from "../../TopicList";
import List from "../../List";

Enzyme.configure({ adapter: new Adapter() });

describe("Home", () => {
  it("should render TopicList, List", () => {
    const wrapper = shallow(<Home />);
    expect(
      wrapper.containsAllMatchingElements([<TopicList />, <List />]),
    ).be.equal(true);
  });

  it("should have empty articles", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.state("articles")).to.eql([]);
  });

  it("calls componentDidMount", () => {
    const methodSpy = sinon.spy(Home.prototype, "componentDidMount");
    const wrapper = shallow(<Home />);
    expect(methodSpy.calledOnce).to.equal(true);
    methodSpy.restore();
  });

  it("calls fetchArticles(0)", () => {
    const methodSpy = sinon.spy(Home.prototype, "fetchArticles");
    const wrapper = shallow(<Home />);

    expect(methodSpy.calledWith(0)).to.equal(true);
    methodSpy.restore();
  });

  it("calls fetchArticles after componentDidMount", () => {
    const fetchSpy = sinon.spy(Home.prototype, "fetchArticles");
    const didMountSpy = sinon.spy(Home.prototype, "componentDidMount");
    const wrapper = shallow(<Home />);
    expect(fetchSpy.calledAfter(didMountSpy)).to.equal(true);
    fetchSpy.restore();
    didMountSpy.restore();
  });
});
