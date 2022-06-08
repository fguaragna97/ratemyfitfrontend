import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../api/users";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();

    const loginInput = event.target.elements.loginInput.value;

    const body = {
      password: event.target.elements.password.value,
    };

    if (loginInput.search("@") === -1) {
      body.username = event.target.elements.loginInput.value;
    } else {
      body.email = event.target.elements.loginInput.value;
    }

    const data = await LoginUser(body);

    console.log(data);
    if (data) {
      navigate("/");
    } else {
      console.log("User not found");
    }
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username or Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="loginInput"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}