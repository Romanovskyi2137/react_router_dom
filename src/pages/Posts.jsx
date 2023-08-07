import React from "react";
import {Link, useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import PostFilter from "../components/PostFilter";

function Posts (props) {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect((() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        }), [])
        const styles = {
            display: "flex",
            justifyContent: "center",
            paddingTop: "30px"
        };

        let filter = searchParams.get("search") || "";
        
    return (
        <div>
            <PostFilter/>
            <div style={styles}>
                <ul>
                    {posts.filter(post => post.title.includes(filter))
                    .map(post => <li key={post.id}><Link 
                        to={`/posts/${post.id}`}
                    >
                        {post.title}
                    </Link></li>)}
                </ul>
            </div>
        </div>
    )
};

export default Posts