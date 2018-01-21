import React from "react";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";

const Header = props => {
  return (
    <div>
      <Logo url={"/"} />
      <Searchbar />
    </div>
  );
};

export default Header;
