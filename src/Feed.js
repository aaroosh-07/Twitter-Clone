import React, { useEffect, useState } from "react";
import TweetBox from "./tweetbox";
import Post from "./post.js";
import db from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./Feed.css";

function Feed() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "post"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setPosts(data);
    };

    fetchData();
  }, []);
  return (
    <div className="Feed">
      <TweetBox />
      {post.map((post, id) => (
        <Post
          key={id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          image={post.image}
          text={post.text}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}

export default Feed;
