import React from "react"
import { NavLink } from "react-router-dom"



const NavBar = () => {

    return (
    <div>
        <h1>Food-Truck App</h1>
        <nav className="nav-bar">
          <NavLink className="links" to="/">Home</NavLink>
          <NavLink className="links"  to="/search">search</NavLink>
          <NavLink className="links"  to="/login">Login</NavLink>
        </nav>
    </div>
    )
}


export default NavBar;