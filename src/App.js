import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css';
import Header from './Component/User/Header';
import Register from './Component/User/Register';
import { useEffect, useState } from 'react';
import Setauthtoken from './Component/User/Setheadertoken';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import Dashboard from './Component/User/Dashboard';
import Changepassword from './Component/User/Changepassword';
import Productlist from './Component/Product/productlist';
import AddProduct from './Component/Product/AddProduct';
import Login from './Component/User/login';
import Spacificproduct from './Component/Product/Spacificproduct';
import Autheader from './Component/User/Authheader';
import HeaderDecider from './Component/User/HeaderDecider';
import { useDispatch } from 'react-redux';
import { loaduser } from './Redux/reducer/authregister';
if(localStorage.token){
  Setauthtoken(localStorage.token)
}

function App() {
  let dispatch=useDispatch()



  let [loading,setloading]=useState(false)
  let [auth,setauth]=useState(
    {isAuthenticated :false,
    user :null,
    token :localStorage.getItem("token")
  }
  )

  let loadsingleproduct=async()=>{
    setloading(true)
    try {
      let single=await axios.get(`http://localhost:5000/product/`)
      console.log(single)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    dispatch(loaduser())
    loadsingleproduct()
  },[auth])
  if(loading){
    <CircularProgress/>
  }
  
  return (
<div className='App'>
<BrowserRouter>
<HeaderDecider/>
  <Routes>
  <Route path='/'element={<Productlist/>}/>

    <Route path='/login'element={<Login />} />
    <Route path='/product/:id' element={<Spacificproduct/>} />
    

    <Route path='/register'element={<Register/>}/>
    <Route path='/dashboard'element={<Dashboard/>}/>
    <Route path='/changepassword'element={<Changepassword/>}/>
    <Route path='/addproduct'element={<AddProduct/>}/>
  </Routes>
  
</BrowserRouter>

</div>
   
  );
}

export default App;
