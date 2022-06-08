import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <NavbarMenu></NavbarMenu>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
