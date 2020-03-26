import React from "react"
import { NavLink } from "react-router-dom"



const NavBar = () => {

    return (
    <div>
        <nav className="nav-bar">
          <NavLink className="nav-bar__links" to="/">HOME</NavLink>
          <NavLink className="nav-bar__links"  to="/search">SEARCH</NavLink>
          <NavLink className="nav-bar__links"  to="/login">LOGIN</NavLink>
          <NavLink className="nav-bar__links" to="/register">SIGN UP</NavLink>
        </nav>
    </div>
    )
}


export default NavBar;