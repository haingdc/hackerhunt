import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

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
});