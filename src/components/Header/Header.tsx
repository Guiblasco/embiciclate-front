import React from "react";
import "./Header.css";
import NavMenu from "../NavMenu/NavMenu";

const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <h1 className="main-title">Embiciclate</h1>
      <NavMenu />
    </header>
  );
};

export default Header;
