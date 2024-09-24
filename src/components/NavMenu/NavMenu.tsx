import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-links">
        <li>
          <NavLink
            to="/bicis"
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Bicis
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/añadir"
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Añadir
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
