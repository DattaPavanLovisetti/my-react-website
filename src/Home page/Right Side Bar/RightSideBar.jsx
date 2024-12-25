import React from "react";
import "./RightSideBar.css";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";
import five from "../../assets/five.jpg";

export default function RightSideBar() {
  return (
    <div className="rightsidebar-main">
      <div className="rightbar-profiles">
        <img src={one} className="sidebar-profile" alt="Profiles" />
        <span className="side-name">Datta Pavan</span>
      </div>
      <div className="rightbar-profiles">
        <img src={two} className="sidebar-profile" alt="Profiles" />
        <span className="side-name">Naga Valli</span>
      </div>
      <div className="rightbar-profiles">
        <img src={three} className="sidebar-profile" alt="Profiles" />
        <span className="side-name">Akhil Nagendra</span>
      </div>
      <div className="rightbar-profiles">
        <img src={four} className="sidebar-profile" alt="Profiles" />
        <span className="side-name">Nageswara Rao</span>
      </div>
      <div className="rightbar-profiles">
        <img src={five} className="sidebar-profile" alt="Profiles" />
        <span className="side-name">Sunil Reddy</span>
      </div>
    </div>
  );
}
