import React from 'react'
import Autheader from './Authheader'
import Header from './Header'
import { useSelector } from 'react-redux'

export default function HeaderDecider() {
    let auth=useSelector((state)=>state.Auth)
    console.log(auth)
return <div>
    {auth.isAuthenticated ? <Autheader/> : <Header/>}

</div> 
}
