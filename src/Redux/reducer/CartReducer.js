import { Add_To_Cart, Cart_Loading_Attempt, Cart_Loading_False, Cart_Loading_True, Clear_Cart, Clear_Deleted_Product, Delete_Cart_Item, Increment_In_Quantity, Load_Cart, Update_Cart } from "./action/type"


let initialstate={
    cartproduct:null,
    cartloading:false

}

export let cart=(state=initialstate, action)=>{
    switch (action.type) {
        case Load_Cart:
            return{
                ...state,
                cartproduct:action.payload
            }
        case Add_To_Cart:
            return{
                ...state,
                cartproduct:action.payload
            }
        case Clear_Cart:
            return{
                cartproduct:null,
                cartloading:false
            }
       case Delete_Cart_Item:
        return{
            ...state,
            cartproduct:action.payload
        }
        case Cart_Loading_Attempt:
            return{
                ...state,
                cartloading:true
            } 
        case Cart_Loading_True:
            return{
                ...state,
                cartloading:false
            }   
        case Cart_Loading_False:
            return{
                ...state,
                cartloading:false
            }
        case Update_Cart:
            return{
                ...state,
                cartproduct:action.payload
            }

       
    
        default:
           return{
            ...state
           }
    }
}