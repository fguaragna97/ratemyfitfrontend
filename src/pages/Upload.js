import React, { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { newPost } from "../api/posts";
import { UserContext } from "../App";
import "../App.css";

export default function Upload() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user);
  const handleNewPost = (event) => {
    event.preventDefault();

    const body = {
      caption: event.target.elements.caption.value,
      author: user._id,
    };

    newPost(body);
    navigate("/");
  };
  return (
    <Container className="container">
      <div className="insidecontect">
        <Form onSubmit={handleNewPost}>
          <Form.Group className="mb-3">
            <Form.Label>Caption</Form.Label>
            <Form.Control type="text" name="caption" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </div>
    </Container>
  );
}
