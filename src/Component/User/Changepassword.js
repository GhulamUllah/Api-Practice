import { Alert, Button, CircularProgress, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Changepassword({auth,setauth}) {
  let navigate=useNavigate()
    let [name,setname]=useState()
    let [loading,setloading]=useState(false)
    let [errors,seterrors]=useState()
    let [password,setpassword]=useState()
    let handlechange=async(e)=>{
        e.preventDefault()
        setloading(true)
        try {
            let res=await axios.post("http://localhost:5000/user/password-change",{oldpassword:name,newpassword:password})
            console.log(res)
            localStorage.removeItem('token')
            setauth({
              isAuthenticated:false,
              user:null
            })
            seterrors(res.data.message)
            setloading(false)
        } catch (error) {
            console.log(error)
            seterrors(error.response.data.message)
            setloading(false)
            
        }
    }
    let handleback=()=>{
      navigate('/dashboard')
    }
    if(loading){
      <CircularProgress/>
    }
   useEffect(()=>{
    if(!auth?.isAuthenticated){
      return navigate('/login')
    }
   },[auth])
    console.log(auth)
  return (
    <div className='Login' id='Login'>

    <form onSubmit={handlechange}>
   <Alert severity='error'>{errors}</Alert>
    <h2>Change Password</h2>

    <TextField  id="outlined-basic" label="Your Current Password" variant="outlined" type='password' onChange={(e)=>setname(e.target.value)} />
    <TextField sx={{mt:2}} id="outlined-basic" label="Your New Password" variant="outlined" type='password' onChange={(e)=>setpassword(e.target.value)}/>
    <div className='btnclass'>
    <Button sx={{mt:1 ,mr:1}} variant='contained' type='submit'>Change</Button>
    <Button sx={{mt:1}} variant='contained' onClick={handleback}>Dashboard</Button>
    </div>
    </form>
</div>
  )
}
