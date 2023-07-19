import { PhotoCamera } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import {  Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproduct } from '../../Redux/reducer/productaction'
import {ref,getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import { storage } from '../../firebase';
import { Box } from '@mui/system';

export default function AddProduct() {
  let loading=useSelector((state)=>state.product.loading)
  console.log(loading)
  let dispatch=useDispatch()
    let [productTitle,setproductTitle]=useState()
    let [productDescription,setproductDescription]=useState()
    let [brand,setbrand]=useState()
    let [price,setprice]=useState()
    let [progress,setprogress]=useState()
    let [catagery,setcatagery]=useState()
    let [images,setimages]=useState([])
    let [instock,setinstock]=useState()
    let [discount,setDiscount]=useState()
    let [preview,setpreview]=useState()

   
  let uploadimage=(e)=>{
    let file=e.target.files[0]
    console.log(file)
    let storagelocation=ref(storage, "Images" + "/" + file.name) //location
    let upload=uploadBytesResumable(storagelocation,file) //upload file
    upload.on(                                            //upload function
      "state_change",
      (snapshot)=>{
        const prog=(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress(prog)
        console.log(prog)
      },
      (error)=>{
        console.log(error)
      },
      async()=>{
       try {
        let url =await getDownloadURL(storagelocation)
        console.log(url)
        setpreview(url)
       } catch (error) {
        console.log(error)
       }
      }
    )
  }
   
   
  let handlechange=async(e)=>{
    e.preventDefault()
      let option={  productTitle,
        productDescription,
        images:preview,
        price,
        catagery,
        instock,
        brand,
        discount,}
        dispatch(addproduct(option))
      
  } 

  return (
    <div className='Login' id='add'>

    <form onSubmit={handlechange}>
    {loading ? <Box><CircularProgress/></Box> :''}
    <h2>Add Product</h2>
    <img src={preview} alt='' height='200px' width='350px'/>
    <Button variant="contained" sx={{mt:2}} component="label">
  Upload Image
  <input hidden accept="image/*" multiple type="file" onChange={uploadimage}/>
  <IconButton color="#fff" aria-label="upload picture" component="label">
  <PhotoCamera />
</IconButton>
</Button>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Title" variant="outlined" onChange={(e)=>setproductTitle(e.target.value)} />
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Product Description" variant="outlined" onChange={(e)=>setproductDescription(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Price" type='number' variant="outlined" onChange={(e)=>setprice(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Catagory" variant="outlined" onChange={(e)=>setcatagery(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Brand" variant="outlined" onChange={(e)=>setbrand(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Stock" type='number' variant="outlined" onChange={(e)=>setinstock(e.target.value)}/>
    <TextField sx={{mt:2, width:370}} id="outlined-basic" label="Discount" variant="outlined" onChange={(e)=>setDiscount(e.target.value)}/>
    <Button sx={{mt:1}} variant='contained' type='submit' disabled={loading}>Add Product</Button>
    </form>
    <div className='dashboardproductlist' id='Login'>
      
    </div>
</div>
  )
}

