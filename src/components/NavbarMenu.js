import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavUser from "./NavUser";

export default function NavbarMenu() {
  return (
    <Navbar className="navbar">
      <Container>
        <div class="navbar-brand">
          <img
            src="https://banner2.cleanpng.com/20190418/yho/kisspng-t-shirt-vector-graphics-dads-against-daughters-dat-shirt-svg-png-icon-free-download-62964-online-5cb916c051aec1.7616815015556338563346.jpg"
            alt=""
            width="30"
            height="24"
          ></img>
        </div>
        <Link to={"/"} className="navbar-brand">
          RateMyFit
        </Link>
        <Navbar.Toggle />
        {/* <Navbar.Collapse className="justify-content-end">
          <Link to={"/Login"} className="nav-link">
            Login
          </Link>
          <Link to={"/Register"} className="nav-link">
            Register
          </Link>
        </Navbar.Collapse> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <NavUser></NavUser>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
