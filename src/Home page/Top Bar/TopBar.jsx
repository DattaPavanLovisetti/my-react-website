import React , {useState} from 'react'
import "./TopBar.css"
import profileImage from '../../assets/profileImage.jpg';


export default function TopBar() {
  const [dropDown, setDropDown] = useState(false);

  const handleSearchFocus =()=> {
    setDropDown(true)
  };

  const handleSearchBlur = ()=> {
    setTimeout(()=> setDropDown(false),200)
  };

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
        <span className='profile-name'>Profile</span>
        <img 
        src={profileImage}  
        alt='Profile'
        className='profileImage'
        ></img>

        </div>
    </div>
  )
}
