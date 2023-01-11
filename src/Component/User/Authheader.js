import { Avatar, Button, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image from './3.jpg'

export default function Autheader() {
  let auth=useSelector((state)=>state.Auth)
  let navigate=useNavigate()
  let handledashboard=()=>{
    navigate('/dashboard')
  }
  let handleadd=()=>{
   
    
    navigate('/addproduct')
    
  }
  let handlep=()=>{
    navigate('/')
  }
  let login=()=>{
    navigate('/login')
  }
  let register=()=>{
    navigate('/register')
  }
  return (
    <div className='header'>
        <div className='logo'>
            <h2>Product Shop</h2>
        </div>
        <div className='Services'>
        <ul>
            <li onClick={handlep}>Products</li>
            <li>Services</li>
            <li>Contact us</li>

            <div className='btn1'><Button variant='contained' onClick={handleadd} >Add Product</Button></div>
            <Button sx={{
              p:1,
              color:'white',
              border:'1px dashed white',
              zIndex:-1
            }} onClick={handledashboard}>
            <Avatar
  alt="Remy Sharp"
  src={image}
  sx={{ width: 36, height: 36}} 
/>
<Typography sx={{ml:2}}>{auth?.user?.username}</Typography>
            </Button>
        </ul>
        </div>
    </div>
  )
}