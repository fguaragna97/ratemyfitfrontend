import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
