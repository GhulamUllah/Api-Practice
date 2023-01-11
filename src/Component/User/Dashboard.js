import { Alert, AlertTitle, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, Logout_controler } from '../../Redux/reducer/authregister'
import Productlist from '../Product/productlist'

export default function Dashboard() {
  let auth=useSelector((state)=>state.Auth)
  let alert=useSelector((state)=>state.alert)
  let dispatch=useDispatch()
    let navigate=useNavigate()
    let handlechange=()=>{
      return navigate('/changepassword')
    }
    let handlelogout=()=>{
      dispatch(logout())
    }
    if(!auth?.isAuthenticated){
      return navigate('/login')
    }
  return (
    <div className='container' id='Login'>
       <Alert severity="success" sx={{m:1,mr:2,ml:2,mt:3}}>
  <AlertTitle>Success</AlertTitle>
  Welcome You are Successfully Logged in... — <strong>{auth.user.username}</strong>
</Alert>
        <div className='userinfo'>
       
          <h2>Welcome to Dashboard</h2>
            <Typography sx={{mt:-2}}>Your Name: {auth?.user?.username}</Typography>
            <Typography>Your Account Created Date: {auth?.user?.createdat}</Typography>
            <Typography>Your Encrypted Password: {auth?.user?.password}</Typography>
            <Typography>Your Role: {auth?.user?.role}</Typography>
            <Typography>Your Id: {auth?.user?._id}</Typography>
            <Button variant='contained' sx={{mr:1, mt:1}} onClick={handlechange}>Change Password</Button>
            <Button variant='contained' sx={{mt:1}} onClick={handlelogout}>Logout</Button>
            
        </div>
        <div className='dashboardproduct'>
          <Productlist/>
        </div>
    </div>
  )
}
