import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header">
      <ul>
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>{" "}
        </NavLink>
        <NavLink
          to={"/favoris"}
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Favoris</li>{" "}
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
