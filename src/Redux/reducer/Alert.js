import { Alert_controler_error, Alert_controler_success } from "./action/type"



let initialState={
    message:null,
}
export default function Alerts(state=initialState,action){
    switch (action.type) {
       case Alert_controler_success:
        return {
            message: action.payload.data.message
        }
        case Alert_controler_error:
            return{
            message: action.payload

            }
    
        default:
            return {...state}
    }
}