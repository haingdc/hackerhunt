import { expect } from "chai";
import axios from "axios";

import { getArticles } from "./index";

describe("getArticles", () => {
  it("builds the url", done => {
    axios.get = url => {
      expect(url).to.equal("https://hackerhunt.co/api/daily/64");
      done();
      return Promise.resolve({ data: {}, headers: {} });
    };
    getArticles(64);
  });
});
