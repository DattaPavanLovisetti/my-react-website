import React from 'react'
import "./LeftSideBar.css"
import { Home , Explore, AddBox , PlayCircle, Settings, Notifications, Message} from '@mui/icons-material'

export default function LeftSideBar() {
  return (
    <div className='leftsidebar-main'>
      <div className='leftsidebar-icons'>
      <Home className='LeftIcon' />
        <span className='LeftIconName'>Home</span>
      </div>
      <div className='leftsidebar-icons'>
      <Explore  className='LeftIcon'/>
        <span className='LeftIconName'>Explore</span>
      </div>
      <div className='leftsidebar-icons'>
      <AddBox className='LeftIcon' />
        <span className='LeftIconName'>Create</span>
      </div>
      <div className='leftsidebar-icons'>
      <PlayCircle className='LeftIcon' />
        <span className='LeftIconName'>Videos</span>
      </div>
      <div className='leftsidebar-icons'>
      <Settings  className='LeftIcon'/>
        <span className='LeftIconName'>Settings</span>
      </div>
      <div className='leftsidebar-icons'>
      <Notifications className='LeftIcon' />
        <span className='LeftIconName'>Notifications</span>
      </div>
      <div className='leftsidebar-icons'>
      <Message  className='LeftIcon'/>
        <span className='LeftIconName'>Message</span>
      </div>
    </div>
  )
}
