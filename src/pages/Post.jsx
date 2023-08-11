import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Post () {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {

            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => setPost(post))
    }, []);
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

export default Post