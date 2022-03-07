import { Avatar } from "@material-ui/core";
import { ChatBubbleOutline, FavoriteBorderOutlined } from "@material-ui/icons";
import { Publish, Repeat, Verified } from "@mui/icons-material";
import React from "react";
import "./post.css"

function Post({
    avatar,
    displayName,
    username,
    verified,
    text,
    image
}){
    return(
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headertext">
                        <h3>{displayName}
                        <span className="post_headerSpecial">
                            {verified && <Verified fontSize="small" />}
                        </span>
                        <span className="post_username">@{username}</span>
                        </h3>
                    </div>
                    <div className="post_headerdescription">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="post_image">
                    <img src={image} alt="working on it"></img>
                </div>
                <div className="post_footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorderOutlined fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    );
};

export default Post;