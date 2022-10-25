import React from "react";
import {connect} from 'react-redux';
import PostItem from "./PostItem";

const Post = ({syncPosts}) => {
    if (!syncPosts.length){
        return <p className="text-center">no posts yet</p>
    }
    return syncPosts.map(postItem => <PostItem postItem={postItem} key={postItem.id}/>)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps,null)(Post)