import { Alert_Off, Alert_On } from "./action/type"
import {v4 as uuidv4} from 'uuid'



export let removealert=(id)=>(dispatch)=>{
    dispatch({type:Alert_Off, payload:id})
}
export let alerton=(msg, type, id = uuidv4(), time = 3000)=>(dispatch)=>{
    dispatch({
        type:Alert_On,
        payload:{msg,id,type}
    })
    setTimeout(() => {
        dispatch(removealert(id))
    }, time);
}
