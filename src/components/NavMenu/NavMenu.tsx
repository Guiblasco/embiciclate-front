import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-links">
      <NavLink
        to={"/bikes"}
        className={({ isActive }) =>
          `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
        }
      >
        Bicis
      </NavLink>
      <NavLink
        to={"/añadir"}
        className={({ isActive }) =>
          `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
        }
      >
        Añadir
      </NavLink>
    </nav>
  );
};

export default NavMenu;
