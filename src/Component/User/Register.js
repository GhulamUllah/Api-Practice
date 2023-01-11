import React, { useEffect, useState } from 'react'
import {Alert, Button, CircularProgress, TextField} from '@mui/material'
import axios from 'axios'
import { Send } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { authregister } from '../../Redux/reducer/authregister'
export default function Register() {
  let auth=useSelector((state)=>state.Auth)
  let alert=useSelector((state)=>state.alert)
  let dispatch=useDispatch()
  console.log(auth)
  let navigate=useNavigate()
    let [loading,setloading]=useState()
    let [name,setname]=useState()
    let [username,setusername]=useState()
    let [password,setpassword]=useState()
    let handleregister=async(e)=>{
        e.preventDefault()
        try {
          let option={
            username,
            email:name,
            password
          }
        dispatch(authregister(option))
          
        } catch (error) {
          console.log(error.response.data.message)
        }
    }
    useEffect(()=>{
      if(auth.isAuthenticated){
        navigate('/dashboard')
      }
    },[auth])
 
    if(loading){
        <CircularProgress/>
    }
    if(alert.message=="Email already registered please login to continue" || alert.message=="Account Created Successfully. Please Login To Continue"){
      navigate('/login')
    }
 
  return (
    <div className='Login' id="Login">

        <form onSubmit={handleregister}>
            {alert.message!='null' ? <Alert severity='error'>{alert.message}</Alert> :''}
        <h2>Register Yourself</h2>

        <TextField  id="outlined-basic" label="Username" variant="outlined" type='text' onChange={(e)=>setusername(e.target.value)} />
        <TextField  sx={{mt:2}} id="outlined-basic" label="Your Email" variant="outlined" type='email' onChange={(e)=>setname(e.target.value)} />
        <TextField sx={{mt:2}} id="outlined-basic" label="Your Password" variant="outlined" type='password' onChange={(e)=>setpassword(e.target.value)}/>
        <Button sx={{mt:1}} variant='contained' type='submit' endIcon={<Send/>}>Register</Button>
        </form>
    </div>
  )
}
