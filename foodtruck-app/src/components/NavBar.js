import React from "react"
import { NavLink } from "react-router-dom"



const NavBar = () => {

    return (
    <div className="nav-container">
        <nav className="nav-bar">

          <NavLink className="nav-bar__links" to="/">
            <button className="nav-bar__button">HOME</button>
          </NavLink>
          
          

          <NavLink className="nav-bar__links"  to="/search">
            <button className="nav-bar__button">SEARCH</button>
          </NavLink>
          


          <NavLink className="nav-bar__links"  to="/login">
            <button className="nav-bar__button">LOGIN</button>
          </NavLink>
          

          
          <NavLink className="nav-bar__links" to="/register">
            <button className="nav-bar__button">SIGN UP</button>
          </NavLink>
          

        </nav>
    </div>
    )
}


export default NavBar;