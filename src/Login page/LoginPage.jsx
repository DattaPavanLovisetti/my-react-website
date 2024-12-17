import  React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
const [error, setError]=useState('')

const navigate = useNavigate();

const handleEmailChange = (e)=> {
 setEmail(e.target.value);
}

const handlePasswordChange = (e)=> {
  setPassword(e.target.value);
}

const handleSubmit = async(e)=> {
  e.preventDefault();
  setError("");

try {
  const response = await sampleApiData(email,password);
if(response.success) {
  navigate('/homepage')
} else {
  setError(response.message);
}
}
 catch{
  setError("An Error is Occured");
}};

const sampleApiData = (email,password)=> {

const users = [
  { email: "test@gmail.com", password: "password" },
  { email: "admin@gmail.com", password: "admin123" },
  { email: "user@gmail.com", password: "userpass" },
  { email: "pavan@gmail.com", password: "pavan123" },
];

return new Promise ((resolve)=> {
  setTimeout(()=>{
    const user=users.find (
      (u)=> u.email===email && u.password===password    
    );

 if(user) {
  resolve ({success:true})
 } else {
  resolve ({success:false, message:"Invalid Email or Password"})
 }

  },1000)
})

}

  return (
    <div className='Loginpage-main'>
        <form onSubmit={handleSubmit} className='loginbox'>
            <h2 className='login'>Login</h2>
        <label htmlFor='email'> E-mail :</label>
        <input 
        value={email} 
        onChange={handleEmailChange}
        className='email-password' 
        type='email' 
        id="email" 
        placeholder='Enter Your Email Id' 
        ></input>

        <label htmlFor='password'> Password : </label>
        <input 
        value={password} 
        onChange={handlePasswordChange}
        className='email-password' 
        type='password' 
        id='password' 
        placeholder='Enter Password'
        ></input>

        {error && (
      <div>{error}</div>
    )}
        <button className='login-button' type='sumbit'>Login</button>
        </form>

    </div>
  
  )
}
