import React from 'react'
import './Homepage.css'

export default function HomePage() {
  return (
    <div className='Homepage-main'>
        <form className='loginbox'>
            <h2 className='login'>Login</h2>
        <label htmlFor='email'> E-mail :</label>
        <input className='email-password' type='email' id="email" placeholder='Enter Your Email Id' ></input>

        <label htmlFor='password'> Password : </label>
        <input className='email-password' type='password' id='password' placeholder='Enter Password'></input>

        <button className='login-button' type='button'>Login</button>
        </form>

    </div>
  )
}
