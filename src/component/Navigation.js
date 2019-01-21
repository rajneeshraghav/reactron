import React from 'react'
import {NavLink} from 'react-router-dom'
 

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

render(){
return(
    <nav className="navbar navbar-expand-sm bg-light">
    
   <NavLink activeStyle={{color:'green'}} className="nav-link" to="">Home</NavLink>
   <NavLink className="nav-link" to="/account">Account</NavLink>
   <NavLink className="nav-link" to="/setting">Setting</NavLink>
    
 
    </nav>
)

}




}

export default Navigation;