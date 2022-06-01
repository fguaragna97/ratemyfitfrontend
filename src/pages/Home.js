import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { getPosts } from "../api/posts";
import PostsList from "../components/PostsList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setError("");
        setLoading(true);

        const data = await getPosts();

        setPosts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <PostsList data={posts}></PostsList>;
    </>
  );
}
