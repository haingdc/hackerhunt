import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import HeaderList from "../../components/HeaderList";
import List from "../../List";
import ArticleContainer from "../../ArticleContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("List", () => {
  it("should render HeaderList, ArticleContainer", () => {
    const wrapper = shallow(<List />);
    expect(
      wrapper.containsAllMatchingElements([
        <HeaderList />,
        <ArticleContainer />,
      ]),
    ).to.equal(true);
  });

  it("should display 'Previous Day' button", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find(".list-container > footer > a").length).to.equal(1);
  });
});
