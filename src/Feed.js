import React, { useEffect, useState } from "react";
import TweetBox from "./tweetbox";
import Post from "./post.js";
import db from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./Feed.css";

function Feed() {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        const querySnapshot = await getDocs(collection(db, "post"));
        const data = querySnapshot.map((doc) => doc.data());
        setPosts(data);
    }, []);
    return (
        <div className="Feed">
            <TweetBox />
            {post.map((post) => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    image={post.image}
                    text={post.text}
                    avatar={post.avatar}
                />
            ))}
            <Post
                displayName="aaroosh agarwal"
                username="aarooshagarwal"
                verified={true}
                image="https://media.giphy.com/media/juSCTzqDAV1Xq/giphy.gif"
                text="hi there i am working on a twitter clone feedback appreciated"
                avatar=" "
            />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;
