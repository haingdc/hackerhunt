import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import TopicList from "../../TopicList";
import { topics } from "../../data";

Enzyme.configure({ adapter: new Adapter() });

describe("TopicList", () => {
  it("should render 11 list item", () => {
    const newTopics = [...topics];
    const wrapper = shallow(<TopicList topics={newTopics} />);
    expect(wrapper.find("li").length).to.equal(11);
  });
});
