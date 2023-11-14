import React from 'react'
import './Loginsignup.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import logo from '../assets/logo.png'
import { useState } from 'react';
const Loginsignup = () => {

  const [action,setAction]=useState("Sign Up")





  return (<div class="center">
  <div class="main">
    <img id = "logo" src={logo} ></img>
    <div className="sbse-bada">
      <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>

        </div>
  
      <div className="inputs">
      {action==="Login"?<div></div> :<div className="input">
            <img src={user_icon} alt=""></img>
            <input type="text" placeholder='Username'></input>
           </div>}
           

           <div className="input">
            <img src={email_icon} alt=""></img>
            <input type="email" placeholder='Email'></input>
           </div>

           <div className="input">
            <img src={password_icon} alt=""></img>
            <input type="password" placeholder='Password'></input>
           </div>
    </div>
    {action==='Sign Up'?<div></div>:<div className="forgot">forgot password</div>}

<div className="submit-container">
    <div className={action==='Login'?"submit":"submit gray"  } onClick={()=>{setAction("Login")}}>Login </div>
    <div className={action==='Sign Up'?"submit":"submit gray" } onClick={()=>{setAction("Sign Up")}}>Sign-up</div>

</div>
</div>
</div>
</div>
  );
}

export default Loginsignup