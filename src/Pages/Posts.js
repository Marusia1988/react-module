import React from "react";
import FetchedPost from "../Components/FetchedPost";
import PostForm from "../Components/PostForm";
import Post from "../Components/Post";

function Posts () {
    return (
     <div className="container pt-3">
        <div className="row">
            <div className="col">
                <PostForm/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Sync Post</h2>
                <Post />
            </div>
            <div className="col">
                <h2>Async Post</h2>
                <FetchedPost />
            </div>
        </div>
     </div>
    );
}

export default Posts;