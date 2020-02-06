import React from "react";

// import { Container } from './styles';

const Nav = () => (
  <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">
          Form
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/list">
          List
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
