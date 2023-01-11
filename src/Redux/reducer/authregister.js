import axios from "axios"
import { Alert_controler_error, Alert_controler_success, Load_user, Login_controler, Logout_controler, Resgister_user } from "./action/type"
import Setauthtoken from "../../Component/User/Setheadertoken"


export let authregister=(option)=>async(dispatch)=>{
    try {
        let res=await axios.post('http://localhost:5000/user/register',option)
        
        dispatch({
            type:Resgister_user,
            payload:res
        })
    } catch (error) {
        
    }
}

export let loaduser=()=>async(dispatch)=>{
    if(localStorage.token){
   Setauthtoken(localStorage.token)

    }
    try {
        let user=await axios.get('http://localhost:5000/user')
        console.log(user)
        dispatch({
            type:Load_user,
            payload:user
        })
    } catch (error) {
        dispatch({
            type:Alert_controler_error,
            payload:error.response.data.message
        })
    }
}
export let User_Login=(option)=>async(dispatch)=>{
    try {
        let login=await axios.post('http://localhost:5000/user/login',option)
        console.log(login)
        localStorage.setItem('token',login.data.token)
        
        dispatch({
            type:Login_controler,
            payload:login

        })
        dispatch({
            type:Alert_controler_success,
            payload:login

        })
        
    } catch (error) {
        console.log(error)
        dispatch({
        type:Alert_controler_error,
        payload:error.response.data.message
        
        })
    }
}
export let logout=()=>(dispatch)=>{
    localStorage.removeItem('token')
    dispatch({
        type:Logout_controler,
        
    })
  
}