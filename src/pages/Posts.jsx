import React from "react";
import {Link, useLoaderData, useSearchParams, defer, useNavigate} from "react-router-dom";
import PostFilter from "../components/PostFilter";

export function Posts (props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const posts = useLoaderData();
    console.log("oleg");
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



export const postsLoader = async () => {
    const user = localStorage.getItem("token");
    return await fetch('https://jsonplaceholder.typicode.com/posts');
};
