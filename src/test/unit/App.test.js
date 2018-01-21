import raf from "./tempPolyfills";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

import App from "../../App";
import Header from "../../Header";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render Header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).be.equal(true);
  });
});
