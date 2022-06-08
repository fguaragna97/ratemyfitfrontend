import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar>
      <Container>
        <Link to={"/"} className="navbar-brand">
          RateMyFit
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to={"/Login"} className="nav-link">
            Login
          </Link>
          <Link to={"/Register"} className="nav-link">
            Register
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
