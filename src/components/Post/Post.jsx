import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const{id, title, body} = post
    const navigate = useNavigate()
    const showDetails = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='border rounded-lg bg-purple-400'>
            <h1>Single Post</h1>
            <h1>Id: {id}</h1>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <button onClick={showDetails}>Show Details</button>
        </div>
    );
};

export default Post;