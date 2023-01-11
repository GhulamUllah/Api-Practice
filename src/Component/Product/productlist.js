import { Button, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import { Delete,Edit } from "@mui/icons-material"
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import EditProduct from './Editproduct'
import Spacificproduct from './Spacificproduct'

export default function Productlist({auth,setauth}) {
    let [loading,setloading]=useState(false)
    let [product,setproduct]=useState()
    let [delproduct,setdelproduct]=useState()
    let [prod,setprod]=useState()
    let [produ,setprodu]=useState()
    let id=useParams()
    console.log(id)
    let navigate=useNavigate()
    let loadproduct=async()=>{
        setloading(true)
        try {
            let res=await axios.get('http://localhost:5000/product')
            setproduct(res.data.data)
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }
    let handledelete=async(p,id)=>{
        if(!auth.isAuthenticated){
            navigate('/login')
        }
        console.log(id)
        setloading(true)
        try {
            let det=await axios.delete(`http://localhost:5000/product/delete-product/${p._id}`)
            setdelproduct(product?.filter((e)=>(product._id==p._id)))
            console.log(det)
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)

        }

    }
    let handleedit=(prod)=>{
        if(!auth.isAuthenticated){
            navigate('/login')
        }
        setprod(prod)
    }
    let handledetails=(produ)=>{
        setprodu(produ)
    }
    useEffect(()=>{
        loadproduct()
    },[delproduct])

    if (loading){
        <CircularProgress/>
    }
  return (

    <div className='product'>

        <EditProduct auth={auth} setauth={setauth} prod={prod} setprod={setprod} product={product} setproduct={setproduct}/>

        <h1>Hot Products</h1>

    <div className='Products'>
        {product && product.map((e)=>{
            return <div className='card'>
                <img className='center' src={e.images && e.images[0] } alt='Error Internet Connection' width="200px" height="250px"/>
                <Typography>Product Tilte: {e.productTitle}</Typography>
                <Typography>Product Description: {e.productDescription}</Typography>
                <Typography>Product Brand: {e.brand}</Typography>
                <Typography>Product Price: ${e.price}</Typography>
                <button onClick={()=>handledetails(e)}>Details</button>
                <Button variant='contained' sx={{mr:2}} endIcon={<Delete/>} onClick={()=>handledelete(e,e._id)}>Delete</Button>
                <Button variant='contained' endIcon={<Edit/>} onClick={()=>handleedit(e)}>Edit</Button>
            </div>
        })}
    </div>
    </div>
  )
}
