import React from "react"
import { NavLink } from "react-router-dom"



const NavBar = () => {

    return (
    <div className="nav-container">
        <nav className="nav-bar">
          <button className="nav-bar__button">
          <NavLink className="nav-bar__links" to="/">HOME</NavLink>
          </button>
          
          <button className="nav-bar__button">
          <NavLink className="nav-bar__links"  to="/search">SEARCH</NavLink>
          </button>

          <button className="nav-bar__button">
          <NavLink className="nav-bar__links"  to="/login">LOGIN</NavLink>
          </button>

          <button className="nav-bar__button">
          <NavLink className="nav-bar__links" to="/register">SIGN UP</NavLink>
          </button>

        </nav>
    </div>
    )
}


export default NavBar;