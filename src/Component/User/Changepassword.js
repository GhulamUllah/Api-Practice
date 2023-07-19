import { Button, CircularProgress, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changepassword } from '../../Redux/reducer/authregister'

export default function Changepassword() {
  let auth= useSelector((state)=>state.Auth)
  let loading= useSelector((state)=>state.Auth.userloading)

  let dispatch = useDispatch()
  let navigate=useNavigate()
    let [name,setname]=useState()
    let [password,setpassword]=useState()
    let handlechange=async(e)=>{
        e.preventDefault()
   let option={oldpassword:name,newpassword:password}
   dispatch(changepassword(option))
    }
    let handleback=()=>{
      navigate('/dashboard')
    }
   useEffect(()=>{},[auth])
 
  
  return (
    <div className='Login' id='Login'>

    <form onSubmit={handlechange}>
      {loading ? <Box><CircularProgress/></Box>:''}
    <h2>Change Password</h2>

    <TextField  id="outlined-basic" label="Your Current Password" variant="outlined" type='password' onChange={(e)=>setname(e.target.value)} />
    <TextField sx={{mt:2}} id="outlined-basic" label="Your New Password" variant="outlined" type='password' onChange={(e)=>setpassword(e.target.value)}/>
    <div className='btnclass'>
    <Button sx={{mt:1 ,mr:1}} variant='contained' type='submit' disabled={loading}>Change</Button>
    <Button sx={{mt:1}} variant='contained' onClick={handleback} disabled={loading}>Dashboard</Button>
    </div>
    </form>
</div>
  )
}
