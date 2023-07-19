import { Typography} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {  singleproduct } from '../../Redux/reducer/productaction'


export default function Spacificproduct() {
  let product = useSelector((state)=>state.product.product)
  let params=useParams()
  let dispatch=useDispatch()
  
  console.log(product)
  useEffect(()=>{
    dispatch(singleproduct(params?.id))
  },[])
 
  return (
    <div className='singleproduct' id='Login' >
      <div  id='Login'><Typography variant='h3' align='center'>Best Product Ever You See</Typography></div>
      <div className='card' >
    <img className='center' src={product.images && product.images[0] } alt='Error Internet Connection' width="90%"/>
    <Typography>Product Tilte: {product.productTitle}</Typography>
    <Typography>Product Description: {product.productDescription}</Typography>
    <Typography>Product Brand: {product.brand}</Typography>
    <Typography>Product category: {product.catagery}</Typography>
    <Typography>Product Stock: {product.instock}</Typography>
    <Typography>Product Discount: ${product.discount}</Typography>
    <Typography>Product Price: ${product.price}</Typography>
    </div>
    </div>
  )
}
