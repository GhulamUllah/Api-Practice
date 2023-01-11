import React, { useEffect, useState } from 'react'
import {Alert, Button, CircularProgress, TextField} from '@mui/material'
import { Send } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { User_Login } from '../../Redux/reducer/authregister'
export default function Login() {
  let navigate=useNavigate()
  let Auth=useSelector((state)=>state.Auth)
  let alert=useSelector((state)=>state.alert)
  let dispatch=useDispatch()
    let [name,setname]=useState()
    let [msg,setmsg]=useState()
    let [loading,setloading]=useState(false)
    let [password,setpassword]=useState()
    let handlelogin=(e)=>{ 
        e.preventDefault()
       let option= {email:name,password}
       dispatch(User_Login(option))
    }
    useEffect(()=>{
      if(Auth.isAuthenticated){
        navigate('/dashboard')
       }
    },[Auth])
  
  if(alert.message=="Email is no Register"){
   return navigate('/register')
  }
 
    
  return (

    <div className='Login' id='Login'>
        <form onSubmit={handlelogin}>
      {
       alert.message!=null && alert.message!="Login Success" ? <Alert severity='error'>{alert.message}</Alert> : ''
       
      }

        <h2>Welcome Back</h2>

        <TextField  id="outlined-basic" label="Your Email" variant="outlined" type='email' onChange={(e)=>setname(e.target.value)} />
        <TextField sx={{mt:2}} id="outlined-basic" label="Your Password" variant="outlined" type='password' onChange={(e)=>setpassword(e.target.value)}/>
        <Button sx={{mt:1}} variant='contained' type='submit' endIcon={<Send/>}>Login</Button>
        </form>
    </div>
  )
}
