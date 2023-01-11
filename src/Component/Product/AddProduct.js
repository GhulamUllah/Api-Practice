import { Alert, Button, CircularProgress, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AddProduct({auth,setauth}) {
  
  let navigate=useNavigate()
    let [productTitle,setproductTitle]=useState()
    let [productDescription,setproductDescription]=useState()
    let [loading,setloading]=useState(false)
    let [errors,seterrors]=useState()
    let [brand,setbrand]=useState()
    let [price,setprice]=useState()
    let [catagery,setcatagery]=useState()
    let [images,setimages]=useState()
    let [instock,setinstock]=useState()
    let [discount,setDiscount]=useState()
    let [addp,setaddp]=useState()
    fetch('http://localhost:5000/product').then((res)=>res.json()).then((data)=>setaddp(data.data))
    let handlechange=async(e)=>{

        e.preventDefault()
        setloading(true)
        try {
            let res=await axios.post("http://localhost:5000/product/add-product",{  productTitle,
            productDescription,
            images,
            price,
            catagery,
            instock,
            brand,
            discount,})
            console.log(res)
            console.log(res.data.message)
            seterrors(res.data.message)
            setloading(false)
            setaddp((prev)=>[res.data.data,...prev])
        } catch (error) {
            console.log(error.response.data.message)
            seterrors(error.response.data.message)

            setloading(false)
            
        }
    }
    useEffect(()=>{
      handlechange()
      if(!auth.isAuthenticated)
      {
        navigate('/login')
      }
    },[])
    if(loading){
      <h1>loading....</h1>
      
    }
    if (errors=="Product Created Sucessfully"){
      navigate('/')
    }
   
  return (
    <div className='Login' id='add'>

    <form onSubmit={handlechange}>
   <Alert severity='error'>{errors}</Alert>
    <h2>Add Product</h2>

    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Title" variant="outlined" onChange={(e)=>setproductTitle(e.target.value)} />
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Description" variant="outlined" onChange={(e)=>setproductDescription(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Image" variant="outlined" type='url' onChange={(e)=>setimages(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Price" type='number' variant="outlined" onChange={(e)=>setprice(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Catagory" variant="outlined" onChange={(e)=>setcatagery(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Brand" variant="outlined" onChange={(e)=>setbrand(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Stock" type='number' variant="outlined" onChange={(e)=>setinstock(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Discount" variant="outlined" onChange={(e)=>setDiscount(e.target.value)}/>
    <Button sx={{mt:1}} variant='contained' type='submit'>Add Product</Button>
    </form>
</div>
  )
}

