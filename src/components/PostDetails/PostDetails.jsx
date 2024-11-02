import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { postId } = useParams();
  const handleGoBack = () => {
    navigate(-1);
  };
  const {id, title} = post
  return (
    <div>
      <h1>Post Id: {id}</h1>
      <h1>Post Title: {title}</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
