import React from "react";
import "./Posts.css";
import one from "../../../assets/one.jpg";
import dog from "../../../assets/dog.jpg";
import { MoreVert } from "@mui/icons-material";

export default function Posts() {
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
    </div>
  );
}
