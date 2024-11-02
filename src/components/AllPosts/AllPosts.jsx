import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const AllPosts = () => {
  const posts = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <h1>Number of All Posts: {posts.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
