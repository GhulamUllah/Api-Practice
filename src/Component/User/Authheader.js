import { Avatar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image from './3.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Autheader() {
  let auth=useSelector((state)=>state.Auth)
  let navigate=useNavigate()
  let handledashboard=()=>{
   return navigate('/dashboard')
  }
  let handleadd=()=>{
   
    
    navigate('/addproduct')
    
  }
  let handlep=()=>{
   return navigate('/')
  }
  let handlecart=()=>{
   return navigate('/usercart')
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
            <li><Button onClick={handlecart} variant='contained' endIcon={<ShoppingCartIcon/>}>Cart</Button></li>
            <li><Button variant='contained' onClick={handleadd}>Add Product</Button></li>
           <Box onClick={handledashboard}
           sx={{
            overflow:'hidden',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            bgcolor:'#1976D2',
            p:'2px 16px',
            borderRadius:'5px'
           }}>

            <Avatar
  alt="Remy Sharp"
  src={image}
  sx={{ width: 40, height: 40}} 
/>
<Typography sx={{ml:2, color:'#fff', display:'flex', gap:'4px'}}>Hi: -<strong>{auth.user.username}</strong></Typography>
</Box>
            
        </ul>
        </div>
    </div>
  )
}