import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavbarMenu></NavbarMenu>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
