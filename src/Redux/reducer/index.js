import Alerts from './Alert'
import {combineReducers} from 'redux'
import authfun from './auth'


export default combineReducers({
    Auth: authfun,
    alert: Alerts,
})
