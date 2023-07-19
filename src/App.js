import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Register from './Component/User/Register';
import React,{ useEffect, useState } from 'react';
import Setauthtoken from './Component/User/Setheadertoken';
import Dashboard from './Component/User/Dashboard';
import Changepassword from './Component/User/Changepassword';
import Productlist from './Component/Product/productlist';
import AddProduct from './Component/Product/AddProduct';
import Login from './Component/User/login';
import Spacificproduct from './Component/Product/Spacificproduct';
import HeaderDecider from './Component/User/HeaderDecider';
import { useDispatch, useSelector } from 'react-redux';
import { loaduser } from './Redux/reducer/authregister';
import Alerts from './Layout/alerts';
import ProtectedRoute from './Layout/ProtectedRoute';
import { loadcart } from './Redux/reducer/Cartaction';
import { CombinedState } from 'redux';
import Usercart from './Component/Cart/Usercart';
if(localStorage.token){
  Setauthtoken(localStorage.token)
}

function App() {
  let [active,setactive]=useState(false)
let auth = useSelector((state)=>state.Auth)
console.log(auth)
  let dispatch=useDispatch()
useEffect(()=>{
  dispatch(loaduser())
  dispatch(loadcart())

},[])

let handle=()=>{
  setactive(true)
  }

  return (
<div className='App'>

<BrowserRouter>
<HeaderDecider/>
<Alerts/>
  <Routes>
  <Route path='/'element={<Productlist/>}/>

    <Route path='/login'element={<Login />} />
    <Route path='/product/:id' element={<Spacificproduct/>} />
    
    
    <Route path='/register'element={<Register/>}/>
    <Route path='/dashboard'element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    <Route path='/changepassword'element={<ProtectedRoute><Changepassword/></ProtectedRoute>}/>
    <Route path='/addproduct'element={<ProtectedRoute><AddProduct/></ProtectedRoute>}/>
    <Route path='/products/:id' element={<Spacificproduct/>}/>
    <Route path='/usercart' element={<Usercart/>}/>
  </Routes>
  
</BrowserRouter>
</div>
   
  );
}

export default App;
