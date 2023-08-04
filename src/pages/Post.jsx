import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Post () {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect((() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => setPost(post))
    }), [id]);
    const h2styles = {
        textAlign: "center",
        maxWidth: "1000px"
        
    }
    return (
        <>
            <h2 style={h2styles}>{post.title}</h2>
            <p>{post.body}</p>
        </>
    )
};

export default Post