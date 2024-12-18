import React , {useState} from 'react'
import "./TopBar.css"
import profileImage from '../../assets/profileImage.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function TopBar() {
  const [dropDown, setDropDown] = useState(false);

  const handleSearchFocus =()=> {
    setDropDown(true)
  };

  const handleSearchBlur = ()=> {
    setTimeout(()=> setDropDown(false),200)
  };

  const renderProfileImage = () => {
    if (profileImage) {
      return <img 
      src={profileImage}  
      alt='Profile'
      className='profileImage'
      />
    } return <AccountCircleIcon   className='profile-icons'/>
    }
  
  return (
    <div className='topbar-main'>
        <h1 className='topbar-name'>Social Media</h1>
        <div className='search-container'>
        <input
        className='topbar-search' 
        placeholder='Search'
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        />

        {dropDown && (
          <div className='search-dropdown'>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        )}
        </div>
        <div className='topbar-profilebar'>
          <div className='profile-icons'>
            <MessageIcon />
          </div>
          <div  className='profile-icons'>
            <NotificationsIcon/>
          </div>
          <div>
           {renderProfileImage()}
          </div>

        </div>
    </div>
  )
}
