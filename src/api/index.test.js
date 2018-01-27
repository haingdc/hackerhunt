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

  it("builds the url with a default page", done => {
    axios.get = url => {
      expect(url).to.equal("https://hackerhunt.co/api/daily/0");
      done();
      return Promise.resolve({ data: {}, headers: {} });
    };
    getArticles();
  });

  it("parses successful response", done => {
    axios.get = url => {
      return Promise.resolve({
        data: "the data",
      });
    };

    getArticles().then(articles => {
      expect(articles.data).to.equal("the data");
      done();
    });
  });

  it("parses error responses", done => {
    const error = new Error("something bad");
    axios.get = url => {
      return Promise.reject(error);
    };

    getArticles()
      .then("fuck!")
      // .then(expect.fail)
      .catch(e => {
        expect(e).to.eql(error);
        done();
      });
  });
});
