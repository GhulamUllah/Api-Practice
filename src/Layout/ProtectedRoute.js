import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    let navigate=useNavigate()
    let auth=useSelector((state)=>state.Auth)

   
 
    if (auth.isAuthenticated==false){
        return navigate('/login')
    }
    console.log(props.children)
    if (auth.isAuthenticated==true){
        return {...props.children}
    }

}
