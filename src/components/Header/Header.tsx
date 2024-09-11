import React from "react";
import "./Header.css";
import NavMenu from "../NavMenu/NavMenu";

const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <span className="main-title" aria-label="embiciclate">
        Embiciclate
      </span>
      <NavMenu />
    </header>
  );
};

export default Header;
