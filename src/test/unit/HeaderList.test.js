import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import HeaderList from "../../components/HeaderList";

Enzyme.configure({ adapter: new Adapter() });

describe("HeaderList", () => {
  it("should render .topic-name, .sort", () => {
    const wrapper = shallow(<HeaderList />);
    expect(wrapper.find(".topic-name").length).to.equal(1);
    expect(wrapper.find(".sort").length).to.equal(1);
  });

  it("the length of sort items should be 4", () => {
    const wrapper = shallow(<HeaderList />);
    expect(wrapper.find("option").length).to.equal(4);
  });
});
