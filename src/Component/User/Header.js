import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header({auth,setauth}) {
  let navigate=useNavigate()
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

            <Button variant='contained' onClick={login}>Login</Button>
            <Button variant='contained' onClick={register}>Register</Button>
        </ul>
        </div>
    </div>
  )
}
