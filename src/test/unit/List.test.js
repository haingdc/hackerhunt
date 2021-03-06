import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import { spy } from "sinon";

import HeaderList from "../../components/HeaderList";
import List from "../../List";
import ArticleContainer from "../../ArticleContainer";
import Home from "../../Home";

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

  it("should have previousDays prop", () => {
    const wrapper = mount(<Home />);
    const ListComp = wrapper.find(List);

    expect(ListComp.prop("previousDays")).to.be.a("function");
  });
});

describe("Previous Days button", () => {
  it("should link to page 1", () => {
    const wrapper = shallow(<List page={0} />);
    expect(
      wrapper
        .find("footer > a")
        .at(0)
        .prop("href"),
    ).to.equal("/page/1");
  });

  it("pass onPreviousDays to 'Previous Days' button", () => {
    const wrapper = shallow(<List />);
    const prevBtn = wrapper.find("footer > a");
    const onPreviousDays = wrapper.instance().onPreviousDays;

    expect(prevBtn.prop("onClick")).to.not.undefined;
    expect(prevBtn.prop("onClick")).to.eql(onPreviousDays);
  });

  it("props.previousDays() should be called when click on this button", () => {
    const previousDaysSpy = spy();
    const wrapper = shallow(<List previousDays={previousDaysSpy} />);
    const prevBtn = wrapper.find("footer > a");
    prevBtn.simulate("click", { preventDefault: () => {} });
    expect(previousDaysSpy.calledOnce).to.equal(true);
  });
});
