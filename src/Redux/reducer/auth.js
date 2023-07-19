import { Change_Password, Load_user, Login_controler, Logout_controler, Resgister_user, User_Loading_Attempt, User_Loading_False, User_Loading_True } from "./action/type"

let initialState={
  isAuthenticated:false,
  user:null,
  token:null,
  userloading:false
}
function authfun(state=initialState, action){
    switch (action.type) {
        case Resgister_user:
            return{
              ...state,
                isAuthenticated:false,
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
                case Change_Password:
                  return {
                    ...state,
                    isAuthenticated:false,
                    user:null,
                    
                  }
                  case User_Loading_Attempt:
                    return {
                      ...state,
                      userloading:true
                    }
                    case User_Loading_True:
                      return {
                        ...state,
                        userloading:false
                      }
                      case User_Loading_False:
                      return {
                        ...state,
                        userloading:false
                      }
        default:
            return{
                ...state
            } 
    }
}
export default authfun