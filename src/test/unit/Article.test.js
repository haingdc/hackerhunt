import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import Article from "../../components/Article";

describe("Article", () => {
  it("the children of <article> tag should be <a> tag and <div> tag", () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find("article > a")).to.have.length(1);
    expect(wrapper.find("article > a + div")).to.have.length(1);
  });
});
