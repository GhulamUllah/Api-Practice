import React, { useEffect, useState } from 'react'
import {Alert, Box, Button, CircularProgress, TextField} from '@mui/material'
import axios from 'axios'
import { Send } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { authregister } from '../../Redux/reducer/authregister'
export default function Register() {
  let loading= useSelector((state)=>state.Auth.userloading)

  let dispatch=useDispatch()
  let navigate=useNavigate()
    let [name,setname]=useState()
    let [username,setusername]=useState()
    let [password,setpassword]=useState()
    let handleregister=async(e)=>{
        e.preventDefault()
        
          let option={
            username,
            email:name,
            password
          }
        dispatch(authregister(option))
        navigate('/login')
          
       
        }
    
 
  
  return (
    <div className='Login' id="Login">

        <form onSubmit={handleregister}>
        {loading ? <Box><CircularProgress/></Box> :''}
          
        <h2>Register Yourself</h2>

        <TextField  id="outlined-basic" label="Username" variant="outlined" type='text' onChange={(e)=>setusername(e.target.value)} />
        <TextField  sx={{mt:2}} id="outlined-basic" label="Your Email" variant="outlined" type='email' onChange={(e)=>setname(e.target.value)} />
        <TextField sx={{mt:2}} id="outlined-basic" label="Your Password" variant="outlined" type='password' onChange={(e)=>setpassword(e.target.value)}/>
        <Button sx={{mt:1}} variant='contained' type='submit' endIcon={<Send/>} disabled={loading}>Register</Button>
        </form>
    </div>
  )
}
