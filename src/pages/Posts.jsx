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
        const styles = {
            display: "flex",
            justifyContent: "center",
            paddingTop: "30px"
        }
    return (
        <div style={styles}>
            <ul>
                {posts.map(post => <li key={post.id}><Link 
                    to={`/posts/${post.id}`}
                >
                    {post.title}
                </Link></li>)}
            </ul>
        </div>
    )
};

export default Posts