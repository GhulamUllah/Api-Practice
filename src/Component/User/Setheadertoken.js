import axios from 'axios'

let Setauthtoken=(token)=>{
    if(token){
        axios.defaults.headers["x_auth"]=token
    }
    else{
        delete axios.defaults.headers["x_auth"]
        localStorage.removeItem("token")
    }
}
export default Setauthtoken