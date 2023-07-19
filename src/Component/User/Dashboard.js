import { Alert, AlertTitle, Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, Logout_controler } from '../../Redux/reducer/authregister'
import Productlist from '../Product/productlist'

export default function Dashboard() {
  let auth=useSelector((state)=>state.Auth)
  let loading= useSelector((state)=>state.Auth.userloading)

  let dispatch=useDispatch()
    let navigate=useNavigate()
    let handlechange=()=>{
      return navigate('/changepassword')
    }
    let handlelogout=()=>{
      dispatch(logout())
    }

  return (
    <div className='container' id='Login'>
     
        <div className='userinfo'>
        {loading ? <Box><CircularProgress/></Box>:''}
          <h2>Welcome to Dashboard</h2>
            <Typography sx={{mt:-2}}>Your Name: {auth?.user?.username}</Typography>
            <Typography>Your Account Created Date: {auth?.user?.createdat}</Typography>
            <Typography>Your Encrypted Password: {auth?.user?.password}</Typography>
            <Typography>Your Role: {auth?.user?.role}</Typography>
            <Typography>Your Id: {auth?.user?._id}</Typography>
            <Button variant='contained' sx={{mr:1, mt:1}} onClick={handlechange} disabled={loading}>Change Password</Button>
            <Button variant='contained' sx={{mt:1}} onClick={handlelogout} disabled={loading}>Logout</Button>
            
        </div>
        <div className='dashboardproductlist' id='Login'>
          <Productlist/>
        </div>
      
    </div>
  )
}
