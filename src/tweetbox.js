import React from "react";
import "./tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetboxinput">
          <Avatar src="" />
          <input placeholder="whats happening"></input>
        </div>
        <Button className="tweetbutton">tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
