import React from "react"
import { NavLink } from "react-router-dom"



const NavBar = () => {

    return (
    <div>
        <h1>Food-Truck App</h1>
        <nav className="nav-bar">
          <NavLink className="nav-bar__links" to="/">Home</NavLink>
          <NavLink className="nav-bar__links"  to="/search">search</NavLink>
          <NavLink className="nav-bar__links"  to="/login">Login</NavLink>
          <NavLink className="nav-bar__links" to="/register">Sign Up</NavLink>
        </nav>
    </div>
    )
}


export default NavBar;