import raf from "./tempPolyfills";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

import App from "./App";

// Enzyme.configure({ adapter: new Adapter() });

describe("the environment", () => {
  it("works, hopefully", () => {
    expect(true).to.be.true;
  });
});
