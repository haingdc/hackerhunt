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

  it("increase page number from 0 to 1", () => {
    const wrapper = shallow(<Home />);
    wrapper.instance().previousDays();
    expect(wrapper.state("page")).to.equal(1);
  });

  it("increase page number from 1 to 2", () => {
    const wrapper = shallow(<Home />);
    wrapper.setState({ page: 1 });
    wrapper.instance().previousDays();
    expect(wrapper.state("page")).to.equal(2);
  });

  it("calls componentDidMount", () => {
    sinon.spy(Home.prototype, "componentDidMount");
    const wrapper = shallow(<Home />);
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
