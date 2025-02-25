import React from 'react'
import { useState } from 'react'
import './Login.css'
import {login,signup} from '../../Firebase'

const Login = () => {
    const [signstate,setSignstate]=useState('Sign In');
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const user_auth= async (event)=>{
      event.preventDefault();
      if(signstate==="Sign In"){
        await login(email,password);
      }else{
        await signup(name,email,password)
      }
      }
    

    return (
    <div className='Login'>
       <img className="logo-N" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt=""/> 
       <div className='login-form'>
        <h1>{signstate}</h1>
        <form>
            {signstate==='Sign Up'? 
             <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your name'/> :<></>} 
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='E-mail'/>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>
            <button onClick={user_auth} type='submit'>{signstate}</button>
            <div className='help'>
                <div className='Rm'>
                <input type='checkbox'/>
                <label htmlFor=''>Remember Me</label>
                </div>
            <p>Need Help?</p>
            </div>
        </form>
        <div className='form-switch'>
            {signstate==='Sign In'? <p>New to Netflix? <span onClick={()=>{setSignstate("Sign Up")}}>Sign Up Now</span></p> : <p>Already Have Account? <span onClick={()=>{setSignstate("Sign In")}}>Sign In Now</span></p>}
            
            
        </div>
       </div>
    </div>
  )
}

export default Login
