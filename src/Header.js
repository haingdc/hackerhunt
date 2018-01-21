import React from "react";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import "./Header.css";

const Header = props => {
  return (
    <header className="App-header">
      <Logo url={"/"} />
      <Searchbar />
    </header>
  );
};

export default Header;
