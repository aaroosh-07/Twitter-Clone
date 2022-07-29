import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import { Search } from "@material-ui/icons";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input type="text" placeholder="search twitter"></input>
      </div>
      <div className="widgets_widgetscontainer">
        <h2>Whats happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="aarooshagarwal"
          options={{ height: 400 }}
        />
        {/* <TwitterShareButton options={{text:'react is awesome!!', via:"aarooshagarwal"}} /> */}
      </div>
    </div>
  );
}

export default Widgets;
