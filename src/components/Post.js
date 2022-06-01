import React from "react";
import { Card, Container } from "react-bootstrap";

export default function Post({ caption, author }) {
  return (
    <Container className="my-4">
      <Card style={{ width: "30rem" }}>
        <Card.Subtitle className="m-2">{author.username}</Card.Subtitle>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/vectors/image-place-holder-with-a-gray-camera-icon-vector-id1226328537?k=20&m=1226328537&s=612x612&w=0&h=2klft8QdMSyDj3oAmFyRyD24Mogj2OygLWrX9Lk6oGQ="
        />
        <Card.Body>
          <Card.Text>{caption}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
