import { Load_user, Login_controler, Logout_controler, Resgister_user } from "./action/type"

let initialState={
  isAuthenticated:false,
  user:null,
  token:localStorage.getItem('token')
}
function authfun(state=initialState, action){
    switch (action.type) {
        case Resgister_user:
            return{
              ...state,
                isAuthenticated:true,
                token: 1234
            }
            
            case Load_user:
              
              return  {
                ...state,
                isAuthenticated:true,
                user:action.payload.data.data,
                token:action.payload.data.token

                }
                case Login_controler:
              return  {
                ...state,
                isAuthenticated:true,
                user:action.payload.data.user,
                token:action.payload.data.token
                }
                case Logout_controler:
                   return {
                    ...state,
                    isAuthenticated:false,
                    user:null,

                }
    
        default:
            return{
                ...state
            } 
    }
}
export default authfun