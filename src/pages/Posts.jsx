import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

function Posts (props) {
    const [posts, setPosts] = useState([]);
    useEffect((() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        }), [])
    return (
        <>
            <ul>
                {posts.map(post => <li><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)}
            </ul>
        </>
    )
};

export default Posts