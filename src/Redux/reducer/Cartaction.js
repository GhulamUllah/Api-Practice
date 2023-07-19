import axios from "axios"
import { baseurl } from "../../baseurl"
import { Add_To_Cart, Cart_Loading_Attempt, Cart_Loading_False, Cart_Loading_True, Clear_Cart, Delete_Cart_Item, Load_Cart, Update_Cart } from "./action/type"
import { alerton } from "./Alertaction"



export let loadcart=()=>async(dispatch)=>{
    try {
        dispatch({type:Cart_Loading_Attempt})
        let cartload=await axios.get(`${baseurl}/cart`)
        console.log(cartload)
        dispatch({type:Load_Cart,payload:cartload?.data?.cart})
        dispatch({type:Cart_Loading_Attempt})

    } catch (error) {
        console.log(error)
    }
}


export let addtocart=(id)=>async(dispatch)=>{
    try {
        let add=await axios.post(`${baseurl}/cart/additemtocart/${id}`)
        console.log(add)
        dispatch({type:Add_To_Cart,payload:add?.data?.cart})
    } catch (error) {
        console.log(error)
    }
}



export let clearcart=()=>(dispatch)=>{
    dispatch({type:Clear_Cart})
}


export let deleteitemcart=(id)=>async(dispatch)=>{
    console.log(id)
    try {
        dispatch({type:Cart_Loading_Attempt})
        let rem=await axios.post(`${baseurl}/cart/removeitemfromcart/${id}`)
    console.log(rem)
    dispatch({type:Delete_Cart_Item, payload:rem.data.cart})
    dispatch({type:Cart_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:Cart_Loading_False})
    }
}







//counter 
export let incnum=(id)=>async(dispatch)=>{
    
    try {
        dispatch(alerton("Adding in Quantity", "info"))

        console.log(id)
        let res=await axios.post(`${baseurl}/cart/cartitemincreament/${id}`)
        console.log(res)
        dispatch(alerton("Quantity Added", "success"))

        dispatch({type:Update_Cart,payload:res.data.cart})
    } catch (error) {
        console.log(error)
        dispatch(alerton("Sorry There is a Problem", "error"))

    }
    
}
export let minusnum=(id)=>async(dispatch)=>{
    
    try {
        dispatch(alerton("Subtracting Quantity", "info"))
        console.log(id)
        let res=await axios.post(`${baseurl}/cart/cartitemdecreament/${id}`)
        console.log(res)
        dispatch(alerton("Quantity Decreased", "success"))

        dispatch({type:Update_Cart,payload:res.data.cart})

    } catch (error) {
        console.log(error)
    }
    
}