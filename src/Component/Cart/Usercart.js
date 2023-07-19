import React, { useState } from 'react'
import {Button, Divider, TextField, Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Stack } from '@mui/system';
import { deleteitemcart, incnum, minusnum } from '../../Redux/reducer/Cartaction';
export default function Usercart() {
    let name=useSelector((state)=>state?.Auth?.user?.username)
    let cart=useSelector((state)=>state?.cart?.cartproduct?.cartItems)
    let subtotal=0
    let ship=0
    let totaldiscount=0

    let dispatch=useDispatch()
    let handledel=(id)=>{
        dispatch(deleteitemcart(id))
    }
  
    let Numdec=(id)=>{
        dispatch(minusnum(id))
    }
    let Numinc=(id)=>{
        dispatch(incnum(id))
    }
  return (
    <>
    <div className='cartheader'>
    <div className='welcome'>
        <Typography variant='h5'>Welcome <strong>{name}</strong> To Cart Page</Typography>
    </div>
    <div className='Cartlogo'>
    <ShoppingCartIcon sx={{fontSize:'35px', color:'#fff'}}/> <Typography variant='h5'>My Cart</Typography>
    </div>
</div>
<Stack spacing={2} m={2} divider={<Divider orientation='horizontal' columnItem/>}>
{cart ? cart?.map((e)=>{
   console.log(e)
   subtotal=subtotal+(e?.product?.price * e?.quantity)
   totaldiscount=totaldiscount+(e?.product?.discount * e?.quantity)
   ship=ship + (e?.product?.price * e?.quantity * 0.02)
    return <Stack direction='row' divider={<Divider orientation='vertical' flexItem/>} m={'0 20px'} justifyContent={'space-between'}>
       <Box sx={{display:'flex'}}>
       <img src={e?.product?.images} alt='No Internet Connection' height='150px' width='100px' />

            <div style={{flexDirection:'column', marginLeft:'18px'}}>
            <Typography variant='h5' mb={2}>Title: <strong>{e?.product?.productTitle}</strong></Typography>
            <Typography mb={2}>Discription: {e?.product?.productDescription}</Typography>
            <Typography mb={2}>Price: <strong>${e?.product?.price}</strong></Typography>
            <Typography mb={2}>In Stock: <strong>{e?.product?.instock} Items</strong></Typography>
   </div>
   

        </Box>
        <div>
            <Typography textAlign={'center'} variant='h6' mb={2}>Quantity</Typography>
            <div className='counter' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Button variant='contained' onClick={()=>Numdec(e?.product?._id)}>-</Button>
        <input style={{width:'50px', padding:'10px',textAlign:'center'}} value={e?.quantity && e?.quantity>0 ? e?.quantity : 0} type='number'/>
        <Button variant='contained' onClick={()=>Numinc(e?.product?._id)}>+</Button>

    </div>
   </div>
    <Stack >
    <Box ml={2} >
      
        <Typography variant='h6'><strong>Total: ${e?.product?.price}</strong></Typography>
        <Typography variant='h6'><strong>Discount: ${e?.product?.discount}</strong></Typography>
        <Button variant='contained' sx={{mt:4,ml:1}} onClick={()=>handledel(e?.product?._id)}>Delete</Button>

        </Box>
    </Stack>
        
    </Stack>

}) : ''
}
</Stack>
<Box>
<div className='cartheader'>
    <div className='welcome'>
        <Typography variant='h5'>Grand Total</Typography>
    </div>
    <div className='Cartlogo'>
    <ShoppingCartIcon sx={{fontSize:'35px', color:'#fff'}}/> <Typography variant='h5'>My Cart</Typography>
    </div>
</div>
<div style={{display:'flex', justifyContent:'right', margin:'20px 25px'}}><TextField id='filled-basic' variant='outlined'  label='Promo Code'/>
      <Button variant='contained' sx={{p:2}} >Apply Code</Button></div>
<Box display={'flex'} justifyContent={'space-between'} m={'10px 200px'}>

  <Box >
      <Typography variant='h4'><strong>Your Sub Total:</strong> </Typography>
      <Divider/>
      <Typography variant='h4'><strong>Total Discount:</strong> </Typography>
      <Divider/>
      <Typography variant='h4'><strong>Shipping fee*(WAT inc):</strong> </Typography>
      <Divider/>
      <Typography variant='h4' mt={3}><strong>Total:</strong> </Typography>

  </Box>



   <Box >

      <Typography variant='h4'><strong>${subtotal}</strong></Typography>
      <Divider/>
      <Typography variant='h4'><strong>- ${totaldiscount}</strong></Typography>
      <Divider/>
      <Typography variant='h4'><strong> ${ship}</strong></Typography>
      <Divider/>
      <Typography variant='h4' border={'2px dashed black'} mt={3}><strong> ${ship+subtotal-totaldiscount}</strong></Typography>
  </Box>


</Box>
<Box display={'flex'} justifyContent={'center'} mb={5} mt={5}><Button variant='contained'>Proceed To Checkout</Button></Box>

</Box>
</>
    
  )
}
