import React, { useState, useEffect } from "react";
import {Link, useSearchParams, useNavigate} from "react-router-dom";
import PostFilter from "../components/PostFilter";

export function Posts (props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        }, []);    
    const styles = {
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px"
    };
    let filter = searchParams.get("search") || "";
    const navigate = useNavigate();
    return (
        <div style={styles}>
            <ul>
                <PostFilter/>
                {filter ? <button onClick={() => navigate(-1)}>Back</button> : <>   </>}
                {posts
                .filter(post => post.title.includes(filter))
                .map(post => <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>)}
            </ul>
        </div>
    )
};
