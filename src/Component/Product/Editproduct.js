import { Send } from '@mui/icons-material'
import { Alert, Button, CircularProgress, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function EditProduct({auth,setauth,prod,setprod,product,setproduct}) {
  console.log(product)
    let [productTitle,setproductTitle]=useState()
    let [productDescription,setproductDescription]=useState()
    let [sid,setsid]=useState()
    let [loading,setloading]=useState(false)
    let [errors,seterrors]=useState()
    let [brand,setbrand]=useState()
    let [price,setprice]=useState()
    let [catagery,setcatagery]=useState()
    let [images,setimages]=useState()
    let [instock,setinstock]=useState()
    let [discount,setDiscount]=useState()
    let [change,setchange]=useState()
    
      useEffect(()=>{
        
        setproductTitle(prod?.productTitle)
        setproductDescription(prod?.productDescription)
        setbrand(prod?.brand)
        setprice(prod?.price)
        setcatagery(prod?.catagery)
        setimages(prod?.images)
        setinstock(prod?.instock)
        setDiscount(prod?.discount)
        setsid(prod?._id)
        
        
        
      },[prod])
    
console.log(productTitle) 
    let handlechange=async(e)=>{
        e.preventDefault()
        setloading(true)
        try {
            let res=await axios.put(`http://localhost:5000/product/update-product/${sid}`,{  productTitle,
            productDescription,
            images,
            price,
            catagery,
            instock,
            brand,
            discount,})
            console.log(res.data)
            seterrors(res.data.message)
            let update=product?.map((pro)=>pro._id==prod._id ? res?.data?.data : pro)
            setproduct(update)
        } catch (error) {
            console.log(error.response.data.message)
            seterrors(error.response.data.message)

            setloading(false)
            
        }
    }

    if(loading){
      <CircularProgress sx={{mt:5}}/>
    }
 
  return (
    <div className='Login' id='add'>

    <form onSubmit={handlechange}>
   {errors && (<Alert severity='error'>{errors}</Alert>)}
    <h2>Edit Product</h2>

    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Title" variant="outlined" value={productTitle ? productTitle : ''} onChange={(e)=>setproductTitle(e.target.value)} />
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Description" variant="outlined" value={productDescription ? productDescription : ''} onChange={(e)=>setproductDescription(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Image" variant="outlined" type='url' value={images ? images : ''} onChange={(e)=>setimages(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Price" type='number' variant="outlined" value={price ? price : ''} onChange={(e)=>setprice(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Catagory" variant="outlined" value={catagery ? catagery : ''} onChange={(e)=>setcatagery(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Brand" variant="outlined" value={brand ? brand : ''} onChange={(e)=>setbrand(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Stock" type='number' variant="outlined" value={ instock ? instock : ''} onChange={(e)=>setinstock(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Discount" variant="outlined" value={discount ? discount : ''} onChange={(e)=>setDiscount(e.target.value)}/>
    <Button sx={{mt:1}} variant='contained' value={sid} type='submit'endIcon={<Send/>}>Update</Button>
    </form>
</div> 
  )
}

