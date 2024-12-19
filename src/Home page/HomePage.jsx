import React from 'react'
import TopBar from './Top Bar/TopBar'
import "./HomePage.css"
import LeftSideBar from './Left Side Bar/LeftSideBar'
import RightSideBar from './Right Side Bar/RightSideBar'
import Feed from './Feed/Feed'

export default function HomePage() {
  return (
    <div className='Homepage-main'>
      <TopBar/>
      <div className='mainWrapper'>
      <LeftSideBar />
      <Feed />
      <RightSideBar />
      </div>
    </div>
  )
}
