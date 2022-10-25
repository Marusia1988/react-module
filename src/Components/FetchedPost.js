import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import {fetchPosts} from '../redux/actions';
import { Loader } from "./Loader";



export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)
    
    if (loading) {
        return <Loader/>
    }

    if (!posts.length){
        return <button 
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
        >Loading</button>
    }
    return posts.map(postItem => <PostItem postItem={postItem} key={postItem.id}/>)

}