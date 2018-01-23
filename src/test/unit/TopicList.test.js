import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import TopicList from "../../TopicList";
import { topics } from "../../data";

Enzyme.configure({ adapter: new Adapter() });

describe("TopicList", () => {
  it("should render 11 topic items", () => {
    const newTopics = [...topics];
    const wrapper = shallow(<TopicList topics={newTopics} />);
    expect(wrapper.find("nav > div.topic").length).to.equal(11);
  });

  it("open source topic should has 5 children topic", () => {
    const newTopics = [...topics];
    const wrapper = shallow(<TopicList topics={newTopics} />);
    expect(wrapper.find(".children-topic").length).to.equal(5);
  });
});
