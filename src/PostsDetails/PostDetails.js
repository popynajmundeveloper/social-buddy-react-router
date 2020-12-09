import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect (() =>{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data=>setPost(data));
    },[])
    return (
        <div>
            <h3>userId:{postId}</h3>
            <p>id:{postId}</p>
            <p>title:{post.title}</p>
            <p>body:{post.body}</p>
        </div>
    );
};

export default PostDetails;