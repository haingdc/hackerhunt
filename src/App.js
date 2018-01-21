import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Everything go here</h1>
      </div>
    );
  }
}

export const Header = props => {
  return (
    <div>
      <Logo url={"/"} />
      <Searchbar />
    </div>
  );
};

export const Logo = ({ url }) => {
  return (
    <div className="logo-wrapper">
      <a href={url}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          data-reactid="7"
        >
          <path
            d="M27 17v7h5v-24h-5v12h-4v-12h-5v24h5v-7h4zm-27 11h32v4h-32v-4zm0-28h5v24h-5v-24zm9 0h5v24h-5v-24zm-4 12h4v5h-4v-5z"
            fill="#f60"
            data-reactid="8"
          />
        </svg>
      </a>
    </div>
  );
};

export const Searchbar = props => {
  return (
    <div>
      <input type="text" placeholder="" />
    </div>
  );
};

export default App;
