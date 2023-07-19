import React, { useEffect, useState } from 'react'
import {Alert, Button, CircularProgress, TextField} from '@mui/material'
import { Send } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userlogin, User_Login } from '../../Redux/reducer/authregister'
import { Box } from '@mui/system'
import { clearcart } from '../../Redux/reducer/Cartaction'
export default function Login() {
  let auth= useSelector((state)=>state.Auth)
  let loading= useSelector((state)=>state.Auth.userloading)
  let dispatch=useDispatch()
 let navigate=useNavigate()
    let [name,setname]=useState()
    let [password,setpassword]=useState()
    let handlelogin=(e)=>{ 
        e.preventDefault()
       let option= {email:name,password}
       dispatch(userlogin(option))
    }
    useEffect(()=>{
      if(auth.isAuthenticated){
        return navigate('/dashboard')
      }
    },[auth])


  return (

    <div className='Login' id='Login'>
        <form onSubmit={handlelogin}>
     
        {loading ? <Box><CircularProgress/></Box> :''}
        <h2>Welcome Back</h2>
        <TextField  id="outlined-basic" label="Your Email" variant="outlined" type='email' onChange={(e)=>setname(e.target.value)} />
        <TextField sx={{mt:2}} id="outlined-basic" label="Your Password" variant="outlined" type='password' onChange={(e)=>setpassword(e.target.value)}/>
        <Button sx={{mt:1}} variant='contained' type='submit' endIcon={<Send/>} disabled={loading}>Login</Button>
        </form>
    </div>
  )
}
