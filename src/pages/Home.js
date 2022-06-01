import React, { useEffect, useState } from "react";
import PostsList from "../components/PostsList";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { data } = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {}
    };
    fetchdata();
  }, []);
  return <PostsList data={posts}></PostsList>;
}
