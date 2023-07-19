import { Alert_controler_error, Alert_controler_success, Alert_Off, Alert_On } from "./action/type"



let initialState={
    message:null,
    alerts:[]
}
export default function Alerts(state=initialState,action){
    switch (action.type) {
       case Alert_Off:
        return {
            ...state,
            alerts:  state.alerts.filter((fil)=>fil.id !== action.payload)
        }
        case Alert_On: 
            return{
                ...state,
            alerts: [...state.alerts,action.payload]

            }
    
        default:
            return {...state}
    }
}