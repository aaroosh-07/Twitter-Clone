import React from "react";
import TweetBox from "./tweetbox";
import Post from "./post.js"
import './Feed.css'

function Feed(){
    return (
        <div className="Feed">
            <h2>Home</h2>
            <TweetBox />
            <Post />
            <Post />
            <Post />
            
        </div>
    );
}

export default Feed;