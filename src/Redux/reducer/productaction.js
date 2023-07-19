import axios from "axios"
import { baseurl } from "../../baseurl.js"
import {Loading_Attempt,Loading_Attempt_False,Loading_Attempt_True,Get_product,Update_product,Delete_product,Add_product, Product_to_Edit_Form, Single_product, Clear_Deleted_Product} from './action/type.js'
import { alerton } from "./Alertaction.js"
import {  deleteitemcart } from "./Cartaction.js"
export let loadproduct=()=>async(dispatch)=>{
    try {
        dispatch({
            type:Loading_Attempt
        })
        let products= await axios.get(`${baseurl}/product`)
        dispatch({
            type:Get_product,
            payload:products.data.data
        })
   
        dispatch({
            type:Loading_Attempt_True
        })
        
       
    } catch (error) {
        console.log(error)
        dispatch({
            type:Loading_Attempt_False
        })
    }
}




export let addproduct=(option)=>async(dispatch)=>{
        try {
            console.log(option)
            dispatch({
                type:Loading_Attempt
            })
            let add= await axios.post(`${baseurl}/product/add-product`,option)
            console.log(add)
            dispatch({
                type:Add_product,
                payload:add
            })
            dispatch(alerton(add.data.message,"success"))
           
            dispatch({
                type:Loading_Attempt_True
            })
            
           
        } catch (error) {
            console.log(error)
            dispatch({
                type:Loading_Attempt_False
            })
            dispatch(alerton(error.response.data.message, "error"))
        }
}




export let productdelete=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:Loading_Attempt
        })

        let rem=await dispatch(deleteitemcart(id))
        let del=await axios.delete(`${baseurl}/product/delete-product/${id}`)
        console.log(del)
        dispatch({
            type:Delete_product,
            payload:id
        })
        dispatch({
            type:Loading_Attempt_True
        })
        dispatch(alerton(del.data.message,"success"))
    } catch (error) {
        console.log(error)
        dispatch({
            type:Loading_Attempt_False
        })
        dispatch(alerton(error.response.data.message,"error"))
    }
}
export let upadateproduct=(option,id)=>async(dispatch)=>{
    try {
        dispatch({
            type:Loading_Attempt
        })
        let product= await axios.put(`${baseurl}/product/update-product/${id}`,option)
        console.log(product.data.data)
        dispatch({
            type:Update_product,
            payload:product.data.data
        })
      
        dispatch({
            type:Loading_Attempt_True
        })
        dispatch(alerton(product.data.message,"success"))
       
    } catch (error) {
        console.log(error)
        dispatch({
            type:Loading_Attempt_False
        })
        dispatch(alerton(error.response.data.message,"error"))
    }
}
export let editdata=(product)=>async(dispatch)=>{
    dispatch({
        type:Loading_Attempt
    })
    dispatch({
        type:Product_to_Edit_Form,
        payload:product
    })
    dispatch({
        type:Loading_Attempt_True
    })
}
export let singleproduct=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:Loading_Attempt
        })
        let single=await axios.get(`${baseurl}/product/${id}`)
        console.log(single)
        dispatch({
            type:Single_product,
            payload:single.data.data
        })
        dispatch({
            type:Loading_Attempt_True
        })
        dispatch(alerton("Product Loaded Successfully","success"))

    } catch (error) {
        console.log(error)
        dispatch({
            type:Loading_Attempt_False
        })
        dispatch(alerton(error.response.data.success))
    }
}
