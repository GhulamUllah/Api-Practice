import Alerts from './Alert'
import {combineReducers} from 'redux'
import authfun from './auth'
import  productreducer  from './productreducer'
import { cart } from './CartReducer'


export default combineReducers({
    Auth: authfun,
    alert: Alerts,
    product:productreducer,
    cart: cart
})
