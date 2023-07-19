import axios from "axios"
import {  Change_Password, Clear_Cart, Load_user, Login_controler, Logout_controler, Resgister_user, User_Loading_Attempt, User_Loading_False, User_Loading_True } from "./action/type"
import Setauthtoken from "../../Component/User/Setheadertoken"
import { alerton } from "./Alertaction"
import { baseurl } from "../../baseurl"


export let authregister=(option)=>async(dispatch)=>{
    try {
        dispatch({type:User_Loading_Attempt})
        let res=await axios.post(`${baseurl}/user/register`,option)
        console.log(res)
        dispatch({
            type:Resgister_user,
            payload:res
        })
        
        dispatch({
            type:User_Loading_True
        })
        dispatch(alerton(res.data.message,"success"))

    } catch (error) {
        console.log(error)
        dispatch({
            type:User_Loading_False
        })
        dispatch(alerton(error.response.data.message, "error"))
    }
}

export let loaduser=()=>async(dispatch)=>{
    if(localStorage.token){
   Setauthtoken(localStorage.token)

    }
    try {
        dispatch({type:User_Loading_Attempt})
        
        let user=await axios.get(`${baseurl}/user`)
        dispatch({
            type:Load_user,
            payload:user
        })
        dispatch({type:User_Loading_True})

    } catch (error) {
      console.log(error)
      dispatch({type:User_Loading_False})

    }
}
export let userlogin=(option)=>async(dispatch)=>{
    try {
        dispatch({type:User_Loading_Attempt})
        
        let login=await axios.post(`${baseurl}/user/login`,option)
        console.log(login)
        localStorage.setItem('token',login.data.token)
        
        dispatch({
            type:Login_controler,
            payload:login

        })
        dispatch({type:User_Loading_True})

       dispatch(alerton(login.data.message,"success"))
        
    } catch (error) {
        console.log(error)
       dispatch(alerton(error.response.data.message, "error"))
       dispatch({type:User_Loading_False})

    }
}
export let logout=()=>(dispatch)=>{
    dispatch({type:User_Loading_Attempt})

    localStorage.removeItem('token')
    dispatch({
        type:Logout_controler,
        
    })
    dispatch({type:Clear_Cart})
    dispatch(alerton("Logout Successfully" , "success"))
    dispatch({type:User_Loading_True})

  
}
export let changepassword=(option)=>async(dispatch)=>{
    try {
        dispatch({type:User_Loading_Attempt})

        let res=await axios.post(`${baseurl}/user/password-change`,option)
        
        console.log(res)
        localStorage.removeItem('token')
        dispatch({
            type:Change_Password,
        })
        dispatch(alerton(res.data.message, "success"))
        dispatch({type:User_Loading_True})

        
      
      
    } catch (error) {
        console.log(error)
        dispatch({type:User_Loading_False})

        dispatch(alerton(error.response.data.message, "error"))
    }
}