import { Button, CircularProgress, Link, Typography } from '@mui/material'
import * as React from 'react'
import { Delete,Edit, StayPrimaryLandscape } from "@mui/icons-material"
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditProduct from './Editproduct'
import {useDispatch, useSelector} from 'react-redux'
import { editdata, loadproduct, productdelete, singleproduct } from '../../Redux/reducer/productaction'
import { Box, Stack } from '@mui/system'
import { addtocart } from '../../Redux/reducer/Cartaction'

export default function Productlist() {
    let auth=useSelector((state)=>state.Auth)
    let product=useSelector((state)=>state.product.products)
    let loading=useSelector((state)=>state.product.loading)
let [open,setOpen]=useState(false)
    let navigate=useNavigate()
    let dispatch=useDispatch()

    let handledelete=async(p,id)=>{
        if(!auth.isAuthenticated){
            navigate('/login')
        }
     dispatch(productdelete(id))

    }
    let handlecart=(id)=>{
        dispatch(addtocart(id))
    }
    let handleedit=(prod)=>{
        if(!auth.isAuthenticated){
            navigate('/login')
        }
        dispatch(editdata(prod))
        setOpen(true)
    }
    useEffect(()=>{
        dispatch(loadproduct())
    },[])


  return (

    <div className='product'>


        <h1>Hot Products</h1>

    <div className='Products'>
    {loading ? <Box sx={{display:'flex',mt:10, justifyContent:'center',alignItems:'center'}}><CircularProgress/></Box> : 
     product && product.map((e)=>{
        return <div>
            <Stack spacing={2} direction='row'>
            <Box sx={{p:1,backgroundColor: 'primary.dark', '&:hover':{backgroundColor:'primary.main',opacity:[0.6]}}}>
            <img className='center' src={e.images && e.images[0] } alt='Error Internet Connection' width="200px" height="250px"/>
            <Typography>Product Tilte: {e.productTitle}</Typography>
            <Typography>Product Description: {e.productDescription}</Typography>
            <Typography>Product Brand: {e.brand}</Typography>
            <Typography>Product Price: ${e.price}</Typography>
            <Link sx={{display:'block',textAlign:'right', mb:1}} href={`http://localhost:3000/product/${e._id}`} underline='hover'>View Details</Link>

            <Button variant='contained' sx={{mr:2}} endIcon={<Delete/>} onClick={()=>handledelete(e,e._id)}>Delete</Button>
            <Button variant='contained' endIcon={<Edit/>} onClick={()=>handleedit(e)}>Edit</Button>
            <Button variant='contained' onClick={()=>handlecart(e._id)}>Buy</Button>
            </Box>
            </Stack>
        </div>
    })
    }

       
    </div>
    <EditProduct open={open} setOpen={setOpen}/>

    </div>
  )
}
