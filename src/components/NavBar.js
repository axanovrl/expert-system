import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="sm" className="navbar navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand to="/main">
          <img src="/img/logo.png" width="250" height="60" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto align-items-center">
            <NavLink className="nav-link" to="/help">
              Помощь
            </NavLink>
            <NavLink className="nav-link" to="/main">
              Начать заново
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Выход
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
