import React from "react";
import { useAsyncValue, useNavigate } from "react-router-dom";


function PostBody () {
    const navigate = useNavigate();
    const goBack = () => {navigate(-1)};
    const post = useAsyncValue();
    return (
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
    )
};


export default PostBody