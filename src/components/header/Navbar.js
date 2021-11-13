import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { auth } from './../../Config/firebaseConfig';
function Navbar() {
    return (
        <>
           <nav className="navbar navbar-light bg-light ">
               <div className="container">
               <Link to="/" className="navbar-brand">
                  <img src="../logo.jpg" width="60px"/>
               </Link>
               <div className="nav-items d-flex">
               <Link to="/signup" className="nav-link">
                   SignUp
               </Link>
               <Link to="/signin" className="nav-link">
                   SignIn
               </Link>
               <a className="nav-link" onClick={()=>auth.signOut()} style={{cursor:"pointer"}}>
                   LogOut
               </a>
               </div>
               </div>
            </nav> 
        </>
    )
}

export default Navbar
