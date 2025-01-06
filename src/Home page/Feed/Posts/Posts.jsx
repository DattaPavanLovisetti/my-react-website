import React, { useState } from "react";
import "./Posts.css";
import one from "../../../assets/one.jpg";
import dog from "../../../assets/dog.jpg";
import {
  MoreVert,
  FavoriteBorder,
  Comment,
  Share,
  Favorite,
} from "@mui/icons-material";

export default function Posts() {
  const [hoverLike, isHoverLike] = useState(false);

  return (
    <div className="Post">
      <div className="PostTop">
        <div className="PostTopLeft">
          <img src={one} alt="" className="PostImage" />
          <span className="PostName">Santa Claus</span>
        </div>
        <div className="PostTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="PostCenter">
        <img src={dog} alt="" className="PostFeedImage" />
      </div>
      <div className="likecommentshare">
        <div
          className="like"
          onMouseEnter={() => isHoverLike(true)}
          onMouseLeave={() => isHoverLike(false)}
        >
          {hoverLike ? <Favorite /> : <FavoriteBorder />}
          <span className="likeTitle">Like</span>
        </div>
        <div className="like">
          <Comment />
          <span className="likeTitle">Comment</span>
        </div>
        <div className="like">
          <Share />
          <span className="likeTitle">Share</span>
        </div>
      </div>
    </div>
  );
}
