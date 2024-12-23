import React, { useState, useRef, useEffect } from "react";
import "./TopBar.css";
import profileImage from "../../assets/profileImage.jpg";
import { TrendingUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const profileDropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setProfileDropdown((prev) => !prev);
  };

  const handleSearchFocus = () => {
    setSearchDropDown(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setSearchDropDown(false), 200);
  };

  const handleLOgout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userSession")
    navigate("/")
  }

  useEffect(() => {
    const handleClickOutside = (event) =>
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target) &&
      setProfileDropdown(false);
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

  return (
    <div className="topbar-main">
      <h1 className="topbar-name">Social Media</h1>
      <div className="search-container">
        <input
          className="topbar-search"
          placeholder="Search"
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />

        {searchDropDown && (
          <div className="search-dropdown">
            <ul>
              <div className="search-options">
                <TrendingUp />
                <li>Trending Topics</li>
              </div>
              <div className="search-options">
                <TrendingUp />
                <li>Trending Topics</li>
              </div>
              <div className="search-options">
                <TrendingUp />
                <li>Trending Topics</li>
              </div>
              <div className="search-options">
                <TrendingUp />
                <li>Trending Topics</li>
              </div>
            </ul>
          </div>
        )}
      </div>
      <div className="topbar-profilebar" ref={profileDropdownRef}>
        <div className="profile-dropdown-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profileImage"
            onClick={toggleDropdown}
          />

          {profileDropdown && (
            <div className="profile-dropdown">
            <ul>
              <li>Profile</li>
              <li>Help</li>
              <li>Options</li>
              <li onClick={handleLOgout}>Log Out</li>
            </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
