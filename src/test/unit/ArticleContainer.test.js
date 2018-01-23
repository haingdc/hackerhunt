import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import ArticleContainer from "../../ArticleContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("ArticleContainer", () => {
  it("should render .topic-name, .sort", () => {
    const wrapper = shallow(<ArticleContainer />);
    expect(wrapper.find(".topic-name").length).to.equal(1);
    expect(wrapper.find(".sort").length).to.equal(1);
  });
});
