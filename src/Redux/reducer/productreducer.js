import {Loading_Attempt,Loading_Attempt_False,Loading_Attempt_True,Get_product,Update_product,Delete_product,Add_product, Product_to_Edit_Form, Single_product, Load_Single_product} from './action/type.js'

let initialState={
    products:[],
    product:{},
    loading:false
}

export let productreducer=(state=initialState,action)=>{
   switch (action.type) {
    case Loading_Attempt:
        return {
            ...state,
            loading:true,
            
        }
        case Get_product:
        return {
            ...state,
            products:action.payload,
        }
        case Add_product:
            return {
                ...state,
                products:[action.payload.data.data,...state.products]
            }
        case Loading_Attempt_False:
        return {
            ...state,
            loading:false,
            
        }
        case Loading_Attempt_True:
            return {
                ...state,
                loading:false,
                
            }
            case Delete_product:
                return {
                    ...state,
                    products:state.products?.filter((prod)=>prod._id !== action.payload)
                    
                }
                case Update_product:
                return {
                    ...state,
                    products: state.products?.map((p)=>p._id==action.payload._id ? action.payload : p)
                    
                }
                case Product_to_Edit_Form:
                    return {
                        ...state,
                        product:action.payload
                    }
        case Single_product:
            return {
                ...state,
                product:action.payload
            }
            case Load_Single_product:
                return {
                    ...state,
                    product:action.payload
                }
   
    default:
        return {
            ...state
        }
   }
}
export default productreducer