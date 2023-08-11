import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";


export function Post () {
    // const {id} = useParams();
    // const [post, setPost] = useState({});
    // useEffect(() => {

    //         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res => res.json())
    //         .then(post => setPost(post))
    // }, []);
    const post = useLoaderData();
    const navigate = useNavigate();
    const goBack = () => {navigate(-1)}
    return (
        <div className="post_wrapper">
            <div className="post_container">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <div className="back_button__container">
                    <button
                        onClick={goBack}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
};


export const postLoader = async ({params}) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};
