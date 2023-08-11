import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useLoaderData, defer, Await } from "react-router-dom";
import PostBody from "../components/PostBody"


export function Post () {
    // const {id} = useParams();
    // const [post, setPost] = useState({});
    // useEffect(() => {

    //         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res => res.json())
    //         .then(post => setPost(post))
    // }, []);
    const {post} = useLoaderData();
    return (
        <div className="post_wrapper">
            <Suspense fallback={<h3>Loading...</h3>}>
                <Await resolve={post}>
                    {(resolvedPost) => <PostBody />}
                </Await>
            </Suspense>
        </div>
    )
};

const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json()
};


export const postLoader = async ({params}) => {
    return defer({
        post: getPost(params.id)
    })
};
