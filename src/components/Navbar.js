import React from "react";
import { NavLink } from "react-router-dom";
import {logout} from "../api"

function Navbar({loggedInUser, setCurrentUser}) {

    const logoutUser = async () => {
        await logout()
        setCurrentUser(null)
    }

  return loggedInUser ? (
      <>
      <p>
          Welcome {loggedInUser.username}
      </p>
    <ul>
    <li>
        <NavLink  to="/">
         <button onClick={logoutUser} >Log out</button>
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/projects">
         Search sitters
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/projects/add">
          Become a sitter
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/services">
          Our services
        </NavLink>
      </li>
    </ul>
    </>
  ) : (
    <ul>
    <li>
      <NavLink activeStyle={{ color: "red" }} exact to="/projects">
        Projects
      </NavLink>
    </li>
    <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/login-google">
          Login with Google
        </NavLink>
      </li>
  </ul>
  
  )
}
export default Navbar;