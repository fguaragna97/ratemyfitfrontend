import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function NavUser() {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };
  return user?.email ? (
    <Nav>
      <Link to="/upload" className="nav-link">
        + New Post
      </Link>
      <Link to="/profile" className="nav-link">
        {user.username}
      </Link>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Nav>
  ) : (
    <Nav>
      <Link to="/Login" className="nav-link">
        Login
      </Link>
      <Link to="/Register" className="nav-link">
        Register
      </Link>
    </Nav>
  );
}
