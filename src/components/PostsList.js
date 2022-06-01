import React from "react";
import Post from "./Post";

export default function PostsList({ data }) {
  return (
    <>
      <h1 className="my-2">Posts</h1>
      {data.map((item) => (
        <Post key={item._id} author={item.author} caption={item.caption} />
      ))}
    </>
  );
}
