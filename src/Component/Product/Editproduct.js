import { Send } from '@mui/icons-material'
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upadateproduct } from '../../Redux/reducer/productaction'

export default function EditProduct({open,setOpen}) {
  let product=useSelector((state)=>state.product.products)
  let prod=useSelector((state)=>state.product.product)
  let loading=useSelector((state)=>state.product.loading)

  let dispatch=useDispatch()
    let [productTitle,setproductTitle]=useState()
    let [productDescription,setproductDescription]=useState()
    let [sid,setsid]=useState()
    let [brand,setbrand]=useState()
    let [price,setprice]=useState()
    let [catagery,setcatagery]=useState()
    let [images,setimages]=useState()
    let [instock,setinstock]=useState()
    let [discount,setDiscount]=useState()
    
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
      let handleClickopen=()=>{
        setOpen(true)
      }
      let handleClose=()=>{
        setOpen(false)
      }
    let handlechange=async(e)=>{
        e.preventDefault()
        let option={
            productTitle,
            productDescription,
            images,
            price,
            catagery,
            instock,
            brand,
            discount
        }
        dispatch(upadateproduct(option,sid))
   
    }

    
 
  return (
    <div>

 <Dialog>
 <form onSubmit={handlechange}>
 {loading ? <Box><CircularProgress/></Box> :''}

    <DialogTitle open={open} onClose={handleClose}>Edit Product</DialogTitle>

    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Title" variant="outlined" value={productTitle ? productTitle : ''} onChange={(e)=>setproductTitle(e.target.value)} />
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Description" variant="outlined" value={productDescription ? productDescription : ''} onChange={(e)=>setproductDescription(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Image" variant="outlined" type='url' value={images ? images : ''} onChange={(e)=>setimages(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Price" type='number' variant="outlined" value={price ? price : ''} onChange={(e)=>setprice(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Catagory" variant="outlined" value={catagery ? catagery : ''} onChange={(e)=>setcatagery(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Brand" variant="outlined" value={brand ? brand : ''} onChange={(e)=>setbrand(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Stock" type='number' variant="outlined" value={ instock ? instock : ''} onChange={(e)=>setinstock(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Discount" variant="outlined" value={discount ? discount : ''} onChange={(e)=>setDiscount(e.target.value)}/>
    <Button sx={{mt:1}} variant='contained' value={sid} type='submit'endIcon={<Send/>} onClose={handleClose}>Update</Button>
    <DialogActions>
      <Button variant='contained' onClick={handleClose} >Cancel</Button>
      <Button variant='contained' onClick={handleClose} >Subscribe</Button>
    </DialogActions>
    </form>
 </Dialog>
</div> 
  )
}

